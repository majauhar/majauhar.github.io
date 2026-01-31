---
title: "Closed-Form Image Matting: Comprehensive Derivation, Algorithmic Implementation, and Comparative Analysis"
authors:
  - Mahdi Ranjbar*
  - Aissa Abdelaziz*
  - Mohammad A. Jauhar*
year: 2024
status: "submitted"
feature: true
venue: "Image Processing On Line (IPOL)"
tags:
  - Image Matting
  - Computer Vision
  - Optimization
links:
  - type: PDF
    url: https://www.ipol.im/pub/pre/532/
  - type: Demo
    url: https://www.ipol.im/pub/pre/532/
  - type: Code
    url: https://github.com/reproductible-research/image-matting-with-a-closed-form-solution
abstract: "Natural image matting refers to the process of estimating the foreground opacity, also known as the alpha matte, of an input image and extracting the foreground layer. It is a fundamental and challenging task in computer vision and finds applications in various fields related to image processing such as film and image editing, advertising, and medical diagnosis. Numerous approaches have been proposed to address this challenge incorporating both traditional and deep learning techniques. In this paper, we reproduce the paper 'A Closed Form Solution to Natural Image Matting', also referred to as 'Closed Form Matting'. The proposed algorithm is based on local smoothness assumptions on foreground and background colors, the color-line model, and provides a simple closed-form solution that requires sparse scribble constraints instead of more cumbersome and hard-to-develop trimap constraints. We present extended derivations, a Python-based implementation, an online demo, along with comparison on contemporary methods and ablation study on the effects of hyper-parameters."
layout: paper
---