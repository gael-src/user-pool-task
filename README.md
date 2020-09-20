# Moyyn - User Pool Task

</br>

## Install:

> \$ git clone repo

> \$ cd repo

> \$ npm i

> \$ npm start

</br>

## Deploy:

> \$ git add . && git commit -m "commit" && git push

> \$ npm run build

> \$ npm run deploy

https://gael-src.github.io/user-pool-task/

</br>
</br>
</br>
</br>
</br>

## Task:

### Website login and routing

Using ReactJS build a two-page web application.

1. First page ('/' root route) should have a "Login to view our user pool" header, two input fields, one for Email and one for Password, and a "Login" button, one above the other. All elements should be center page.

2. Each field should validate itself. Use Formik and Yup for form control and validation. Email should be a valid email string, and password should be a string with a minimum amount of 8 characters. Display relevant errors if fields are invalid.

3. On successful login, the user is to be redirected to the second page ('/users' route). On page load make a GET request to https://jsonplaceholder.typicode.com/users and present each user in a card, displaying name, email, and city.

4. Add a dummy navigation bar with Moyyn logo on the left side and some dummy buttons aligned to the right.

Optional - use React-Router for routing.

Optional - use Material-UI for the UI elements.

</br>
</br>
</br>
</br>
</br>

## Used technologies:

(those steps are just for informational use)

</br>

### create-react-app

> \$ npx create-react-app .

https://reactjs.org/docs/getting-started.html

</br>

### react-router-dom

> \$ npm install --save react-router-dom

https://www.npmjs.com/package/react-router-dom

</br>

### formik / yup

> \$ npm install formik --save

> \$ npm install yup --save

https://formik.org/docs/overview

</br>

### surge

> \$ npm install --global surge

user-pool.surge.sh
