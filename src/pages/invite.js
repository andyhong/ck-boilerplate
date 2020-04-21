import React from 'react'

const EmailInvitePage = () => (
  <>
  <h2>You have been invited xD</h2>
  <p>You have been invited to create a user on {`{{ .SiteURL }}`}. Follow this link to accept the invite:</p>
  <p><a href="{{ .SiteURL }}/some/path/#invite_token={{ .Token }}">Accept the invite</a></p>
  </>
)

export default EmailInvitePage