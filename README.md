# eleu.me (my website)
Hi! This is the source code of my website.
- Design inspired on Lenovo's Dolby Audio 2019 UWP app. All rights reserved to Dolby, Lenovo and etc.

## TODO
- Mobile support
- Color schemes support
- Light theme support

## Note for developers using Live Server
If you use Live Server on Visual Studio Code, auto reloading will not work because of the Content Security Policy implied by me. If you want to use auto-reloading anyway, put `'unsafe-inline'` at the `script-src` directive. This will allow the inline script execution, but will make the code more vulnerable to XSS attacks.

Remember to remove this after you test it on your computer and send it to production.

## Want to use it for yourself?
You are free to fork and modify it as you want, but leave the credits to me (as specified on [LICENSE](LICENSE)).

## License / Credits
- 2024 Lucas Gabriel (lucmsilva) - BSD-3-Clause
- Inspired on Lenovo's Dolby Audio 2019 UWP app