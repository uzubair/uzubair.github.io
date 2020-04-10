--- 
layout: post
title: MacOS - Change screenshot file type .png is huge
author: uzubair
tags: [macos, screenshots, png, change-default]
---

If you are sharing to Facebook and Twitter, and don’t really care about screenshot quality. This trick is definitely for you. Continue reading. :)

By default, screenshots save as `.png` files in OS X. They look awesome but they are not compressed and take a lot of disk space.

Open Terminal and paste the following command:
```bash
defaults write com.apple.screencapture type jpg
```
You can also use other formats like `.pdf`, `.tiff`, etc. Just change the last letters of the code to your preference.
