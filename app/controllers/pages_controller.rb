class PagesController < ApplicationController
  def index

    @page_title       = 'Stillwell Counseling'
    @page_description = 'Offering individual and family therapy services to Clay Center, KS.'
    


    respond_to do |format|
      format.html {}
      format.js {}
    end
  end
end
