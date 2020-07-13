+++
# Standard form
widget = "contact_form"
action = "/contact_handler.php"
method = "GET" # Default is POST
title = "Contact" 

# For Netlify form
# Comment action and method params and uncomment
# the following line.
#
# netlify = true

# Add a contact via email button if your email
# is configured in the config file of your website.
useEmail = true

[[inputs]]
type = "text"
name = "name"
pattern = "[a-zA-Z]"
placeholder = "Name"

[[inputs]]
type = "email"
name = "email"
pattern = ""
placeholder = "Email"
required = true

[[inputs]]
type = "textarea"
name = "message"
pattern = ""
placeholder = "Your message..."
required = true

+++

Have a great project idea ?  
Let’s talk about it !