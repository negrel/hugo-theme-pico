+++
# For Netlify form
# widget = "contact_form_netlify"

# Standard form
widget = "contact_form"
action = "/contact_handler.php"
method = "GET" # Default is POST
title = "Contact" 

# Add a contact via email button if your email
# is configured in the config file of your website.
useEmail = true

[[inputs]]
type = "text"
name = "name"
pattern = "[a-zA-Z]"
placeholder = "Nom"

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
placeholder = "Votre message..."
required = true

+++

Une idée de projet ?  
Parlons-en !