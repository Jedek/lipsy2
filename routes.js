Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  	this.render('Home');
});

Router.route('/add', function () {
    this.render('AddWord');
});