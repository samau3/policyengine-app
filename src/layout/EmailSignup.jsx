
const backgroundStyle = {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    padding: 20,

    width: '158%',
    // margin: 'auto',
    marginLeft: -150,
    marginTop: 20,
    
}

const h2Style ={
        color:'black',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 3,
}


const h3Style ={
    color:'black',
    fontSize: 12,
    marginTop: 3,
    paddingBottom: 10,

}

const buttonStyle={
    marginLeft:10,
    padding:10,
    color: 'white',
    backgroundColor: '#2C6496',
    borderWidth: 0,
    boxShadow: 'none',
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'top',
    
}

const inputStyle = {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '70%', 
    verticalAlign: 'top'
  }


const SIGNUP_FORM_EMBED_HTML = `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{clear:left; width:300px;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
       #mc_embed_signup input.email,
  #mc_embed_signup input[type="submit"]{
    display: inline-block;
    
  }

</style>
<div id="mc_embed_signup">
    <form action="https://policyengine.us5.list-manage.com/subscribe/post?u=e5ad35332666289a0f48013c5&amp;id=71ed1f89d8&amp;f_id=00f173e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        
<div class="mc-field-group">

	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required placeholder="youremail@example.com" style=${inputStyle} />
    </div>

    </div>
<div class="clear">
<input type="submit" value="Subscribe" name="subscribe" class="button subscribe-button" style="background-color: ${buttonStyle.backgroundColor}; color: ${buttonStyle.color};">
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
`;


export default function EmailSignUp() {

    return (
        <div style={backgroundStyle}>
        <div style={h2Style}>
            <h1>Subscribe to Policy Engine</h1>
        </div>
        <div style={h3Style}>
        <h3> Get the latest posts delivered right to your inbox</h3>

        </div>
        
          <div dangerouslySetInnerHTML={{ __html: SIGNUP_FORM_EMBED_HTML }} />
        </div>
      );
    }