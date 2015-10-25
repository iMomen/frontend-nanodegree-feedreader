/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* Tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Tests to ensures allFeeds variable has a URL defined
     * and that the URL is not empty.
     */
    it('Feeds Url is defined', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe('');
      }
    });


    /* Tests to ensures allFeeds variable has a URL defined
     * and that the URL is not empty.
     */
    it('Feeds Name is defined', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe('');
      }
    });
  });


  /* "The menu" test suite */
  describe('The menu', function() {

    var $body = $('body'),
        $menuIcon = $('.menu-icon-link');

    /* Tests that the menu element is
     * hidden by default. */
     it('The menu is hidden by default', function () {
      expect($body.hasClass('menu-hidden')).toEqual(true);
     });

    /* Tests that the menu changes
     * visibility when the menu icon is clicked. */
     it('The menu is toggled when clicking on icon', function () {
       $menuIcon.trigger('click');
       expect($body.hasClass('menu-hidden')).toEqual(false);
       $menuIcon.trigger('click');
       expect($body.hasClass('menu-hidden')).toEqual(true);
     });
  });

  /* "Initial Entries" test suite */
  describe('Initial Entries', function() {

    /* Tests that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
     beforeEach(function (done) {
       setTimeout(function() {
         init();
         done();
       }, 3000);
     });
     it('Load feed returns at least one entry', function (done) {
       expect(document.getElementsByClassName('feed')[0].children.length).not.toBe(0);
       done();
     });

  });

  /* "New Feed Selection" test suite */
  describe('New Feed Selection', function() {
    var feedOneHeader,
        feedTwoHeader;

    /* Tests that when a new feed is loaded
     * by the loadFeed function that the content actually changes
     */
     beforeEach(function (done) {
       $('.feed').empty();

       loadFeed(0, function () {
         feedOneHeader = $('.feed').find('h2').text();
       });
       done();
     });

     it('Content changes for new feeds', function(done){
      loadFeed(1);
      feedTwoHeader = $('.feed').find('h2').text();
      expect(feedOneHeader).not.toEqual(feedTwoHeader);
      done();
     });
  });
}());
