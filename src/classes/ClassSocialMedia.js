/*import * as Google from 'expo-google-app-auth';

class SocialMedia{
    async GoogleSignin() {
        try {
            const { type, accessToken, user } = await Google.logInAsync({
                iosClientId: `916539336131-qf2osgb0c71fokdbpdjjfr6negc13gr4.apps.googleusercontent.com`,
                androidClientId: `916539336131-bjq3h6dh3sk3498gng2o4sj2a9ofk94c.apps.googleusercontent.com`,
                scopes: ['profile','email']
              });
              
              if (type === 'success') {
                 /*`accessToken` is now valid and can be used to get data from the Google API with HTTP requests *//*
                return user;
              }
              else{
                  console.log("A Network Error Happens.");
              }

        } catch (error) {
            alert(error);
        }
    };
}

var socialMedia = new SocialMedia();
export default socialMedia;*/



//host.exp.exponent
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '916539336131-qf2osgb0c71fokdbpdjjfr6negc13gr4.apps.googleusercontent.com',
    iosClientId: '916539336131-qf2osgb0c71fokdbpdjjfr6negc13gr4.apps.googleusercontent.com',
    redirectUri: "com.googleusercontent.apps.916539336131-qf2osgb0c71fokdbpdjjfr6negc13gr4",
    
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}
