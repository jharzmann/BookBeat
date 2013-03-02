require 'soundcloud'

class Catalog < ActiveRecord::Base

  class << self

    def getAllSongIdsFor(book)
      result = Catalog.where(:book_id => book)
      getAllSongsFor(result)
    end

    def getAllSongsFor(catalogs)
      client = Soundcloud.new(:client_id => 'e5827bb602f60810667a81ca65823de3')
      # get all kinds of resources?
      track_links = []
      track_element = []
      catalogs.each do | catalog |
        track = client.get('/tracks/' + catalog.song_id)
        track_element = []
        track_element << track.title
        track_element << track.permalink_url
        track_links << track_element
      end
      track_links
    end

  end

end

