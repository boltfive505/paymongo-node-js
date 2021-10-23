# paymongo-node-js

My personal paymongo nodejs library (mainly used for React Native Expo)

[The official paymongo library](https://www.npmjs.com/package/paymongo)

# Why I made my own?

I'm currently developing using React Native expo-cli. I get the error "Buffer is not defined", and it only shows on android.

# What are the changes that I made?

The "official" paymongo node library is using the **Buffer** class for converting string to base64.

So on my library, I used **btoa** and polyfilled it with the [base-64](https://www.npmjs.com/package/base-64) library.
