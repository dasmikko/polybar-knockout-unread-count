# polybar-knockout-unread-count

A super simple unread counter for the Knockout forum

# Screenshot
![alt text](https://github.com/dasmikko/polybar-knockout-unread-count/blob/master/screenshot.png?raw=true)

# Requirements
- NodeJS

# Install
Clone and run install

``` 
git clone https://github.com/dasmikko/polybar-knockout-unread-count
npm install
```

Add module to your config

```
[module/kounread]
type = custom/script
exec = node path/to/script/App.js jwt={jwt token here}
format-prefix = ""
format-underline = #ec3737
format = Unread KO posts: <label>
tail = true
```
