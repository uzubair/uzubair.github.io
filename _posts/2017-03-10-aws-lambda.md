--- 
layout: post
title: AWS Lambda for thumbnail generation
author: uzubair
tags: [aws, lambda, s3, s3-events, thumbnails]
---

The most elegant approach is to use AWS Lambda. We can use Amazon S3’s event publishing mechanism to invoke the Lambda function and generate the thumbnails.

See [AWS Lambda function](https://github.com/uzubair/thumbnail-s3-lambda) written in Python that listens for S3 put events for a specified S3 bucket, retrieves the uploaded image file, creates the thumbnail, and puts them back to the specified S3 bucket’s `thumbnails` directory while respecting the key structure.
