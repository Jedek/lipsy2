Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  	this.render('Home');
});

Router.route('/index.html', function () {
  	this.render('Home');
});

Router.route('/basic_markup.html', function () {
  	this.render('Markup');
});

Router.route('/single.html', function () {
  	this.render('Single');
});

Router.route('/contact.html', function () {
  	this.render('Contact');
});