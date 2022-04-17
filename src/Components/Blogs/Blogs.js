import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-primary text-center'>Answer The Question</h2>
            <div className='shadow p-4 rounded-3 mt-4'>
                <h5 className='text-primary'>1. Difference between authorization and authentication</h5>
                <p className='text-justify p-4 text-muted'>Simply put Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.That is Authentication is what the user verifies and Authorization is what resources the user can access.Authentication is the first step in verifying a user and authentication is always after authentication.Authentication also allows the user to see and make partial changes but in case of Authorization the user has nothing to control.</p>
            </div>
            <div className='shadow p-4 rounded-3 mt-4'>
                <h5 className='text-primary'>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p className='text-justify p-4 text-muted'>The firebase is used for a variety of back-end functions.Firebase is very popular for authentication.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter etc.And that's why we use Firebase. <br />In addition to Firebase, there are many types of authentication options such as Auth0, Passport, Amazon Cognito, JSON Web Token, Keycloak,Okta,Parse,Kinvey,Kuzzle  etc </p>
            </div>
            <div className='shadow p-4 rounded-3 mt-4'>
                <h5 className='text-primary'>3. What other services does firebase provide other than authentication?</h5>
                <p className='text-justify p-4 text-muted'>Firebase also provides us with a variety of services in addition to authentication. As Cloud Storage, Cloud Firestore, Firebase Realtime Database, Firebase Hosting, Analytics,Development etc.During the development of the application, the developer is supported by many of the services provided by
                    Firebase. So the developer doesn’t have to think about storage of data, and use the data as requires.And that's why it is so popular in Firbase.</p>
            </div>
        </div>
    );
};

export default Blogs;