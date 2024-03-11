import 'package:flutter/material.dart';
import 'package:another_flutter_splash_screen/another_flutter_splash_screen.dart';
import 'package:flutter/widgets.dart';
// import 'package:app/home.dart';



class MySplash extends StatefulWidget {
  const MySplash({super.key});

  @override
  State<MySplash> createState() => _MySplashState();
}

class _MySplashState extends State<MySplash> {
  @override
  Widget build(BuildContext context) {
    return FlutterSplashScreen(
      setStateTimer:Duration(seconds: 2),
      navigateAfterSeconds: Home(),
      title: Text(
        'COCO SCAN',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 25,
            color: Color(0x00FFFF)
       )
      ),
      image : Image.asset(
        "assets/logo.png",
      ),
       backgroundColor:Color.blueAccent, 
       photoSize : 60,
       loaderColor : Color(0x004242)
    );
  }
}




