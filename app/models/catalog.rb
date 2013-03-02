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
      sampleIDs = ['81235024', '79842096', '80366674', '79869359', '81303712',
                  '80331719', '80045407', '79973942', '79914281', '80781146']
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

