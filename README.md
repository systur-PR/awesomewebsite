Website for /sys/tur
====================

### How do I get set up? ###

1. Clone project to a desirable location: `git clone git@github.com:systur-PR/awesomewebsite.git`

2. Nodejs should be installed on your system see [here](http://nodejs.org/download/)

3. After nodejs is installed it's possible to install other tools with npm that comes with nodejs:
	1. Install bower globally:
		* `npm install -g bower`
	2. Install karma globally:
		* `npm install -g karma`
	3. Next:
		* `cd awesomewebsite`
		* `bower install` will run the bower.json file
		* `npm install` will run the package.json file

If you are going to install a bower package, execute the following: `bower install package-name -S`

If you are going to install a task package, execute the following: `npm install package-name --save-dev`

To execute the project run in command line: `grunt`

### Contribution guidelines ###

* Writing tests that fail
* Writing code that passes the tests
* Code review
