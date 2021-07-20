Install webpack: npm install webpack -g
Install webpack-cli: npm install webpack-cli -g
Install lite-server: npm install lite-server -g

I learned fundamentals of webpack.
Webpack is module bundler that takes javascript modules as input, bundles them together without affecting the logic, and generate one single Js file.

In my example,
I created three modules:
1. lib1.js
2. lib2.js and it referring lib1.js
3. test.js and it is referring lib2.js
Finally we are executing command in CMD: webpack test.js
It will generate ./dist/main.js, which is the bundled js file.
Include the bundled js file(main.js) in Html and execute below command in CMD: lite-server

