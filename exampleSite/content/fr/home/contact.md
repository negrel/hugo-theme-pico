+++
widget = "contact_form"
title = "Me Contacter" 

# Uncomment the following line and widget will NOT be displayed
# hidden = true

# Uncomments the following line for
# standard forms.
#
# Form handler
# action = "/contact_handler.php"
# Form submit method
# method = "GET" # Default is POST

# For Netlify form
#
netlify = true

# Add a contact via email button if your email
# is configured in the config file of your website.
useEmail = true

# Form inputs
[[inputs]]
label = "Votre nom"
# Input type
type = "text"
# minimum input length
minlength = "3"
# maxlength = "25"
name = "name"
# pattern matching
pattern = "[a-zA-Z]"
placeholder = "Nom"
# The input is required to submit the form
# required = true

[[inputs]]
label = "Votre email"
type = "email"
name = "email"
# pattern = ""
placeholder = "Email"
required = true

# Textarea works same as input but doesn't support pattern matching
[[inputs]]
label = "Votre message (minimum 10 lettres)"
type = "textarea"
minlength = "10"
name = "message"
placeholder = "Votre message..."
required = true

+++

Besoin d'aide pour ouvrir un fast-food ?  
Parlons-en !
