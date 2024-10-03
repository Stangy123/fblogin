document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector('.password');
  const hideIcon = document.querySelector('.bx-hide');
  const showIcon = document.querySelector('.bx-show');
  
  hideIcon.addEventListener('click', () => {
      // Toggle the password visibility
      if (passwordInput.type === "password") {
          passwordInput.type = "text";
          hideIcon.style.display = "none";
          showIcon.style.display = "block";
      }
  });
  
  showIcon.addEventListener('click', () => {
      // Toggle the password visibility back
      if (passwordInput.type === "text") {
          passwordInput.type = "password";
          showIcon.style.display = "none";
          hideIcon.style.display = "block";
      }
  });
});
window.fbAsyncInit = function() {
    FB.init({
      appId     : '1716404415826884',  // Replace with your Facebook App ID
      cookie     : true,
      xfbml      : true,
      version    : 'v21.0'        // Use the latest API version
    });
    
    FB.AppEvents.logPageView();   
  };
  const fbLoginButton = document.querySelector('.facebook');

  fbLoginButton.addEventListener('click', function() {
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information...');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
          // You can update the UI or redirect the user
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile,email'});
  });
  