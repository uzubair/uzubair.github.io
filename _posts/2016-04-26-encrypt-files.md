--- 
layout: post
title: Encrypt any file on OS X
author: uzubair
tags: [openssl, openssl file decryption, openssl file encryption, macos file decryption, macos file encryption]
---

Encryption is of paramount importance when it comes to emailing sensitive files such as financial information, passport copies, and more.

While there are many standalone apps that encrypt and decrypt files, OS X provides the capability of encrypting and decrypting files from the Terminal.

Open Terminal and paste the following command (to Encrypt):
```bash
openssl enc -aes-256-cbc -e -in {file-path-in} -out {file-path-out}
```

Change the {file-path-in} and {file-path-out} with the files you want to encrypt and/ or decrypt.

Easy! Right? Now to decrypt, just change ‘-e’ to ‘-d’.
```bash
openssl enc -aes-256-cbc -d -in {file-path-in} -out {file-path-out}
```
That’s it. I found it be very useful when sending sensitive files.
