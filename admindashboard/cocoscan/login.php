<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
</head>
<body>
  <section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="assets/img/photo1jpg.jpg" alt="" class="w-full h-full object-cover">
    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
        <img src="assets/img/CocoScan_logo.png" class="w-40 mb-10 mx-auto">
        <h1 class="font-bold text-5xl text-center">Login</h1>
        <h1 class="text-xl md:text-2xl font-bold text-center leading-tight mt-12">Welcome! Please Enter Your Details</h1>
  
        <form id="loginForm" class="mt-6">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input type="email" id="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input type="password" id="password" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
          </div>
  
          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" class="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">LOGIN</button>
        </form>
  
        <hr class="my-6 border-gray-300 w-full">
  
        <p class="text-sm text-gray-500 mt-12 text-center">&copy;2024, All right reserved.</p>
      </div>

    </div>
  
  </section>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
          
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var data = {
            email: email,
            password: password
        };
          
        fetch('api/login.module.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            
            return response.json();
        })
        .then(data => {
           
            console.log(data);
            
           
            if (data.success) {
          
                window.location.href = data.redirect;
            } else {
             
                console.error(data.message);
            }
        })
        .catch(error => {
        
            console.error('Error:', error);
        });
    });
</script>

</body>
</html>
