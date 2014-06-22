var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.route('component-test');
    this.route('helper-test');
    // this.resource('posts', function() {
    //   this.route('new');
    // });
    this.resource('profile', function() {
        this.route('login', {path: '/'});
        this.route('forget-password');
    })
});

export default Router;
