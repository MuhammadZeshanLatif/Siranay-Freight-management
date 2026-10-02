'use client';
import { useState } from 'react';
import { openInquiryEmail } from '@/lib/inquiry-email';
export default function CarrierInquiryForm() {
  const [sent,setSent]=useState(false);
  function submit(e){e.preventDefault(); const form=e.currentTarget; if(!form.querySelector('input[name="Operating area"]:checked') || !form.querySelector('input[name="Equipment"]:checked')){setSent('Please select an operating area and equipment type.');return;} openInquiryEmail(form,'Carrier inquiry — Siranay Freight Management');setSent('Your email draft is ready. Send it in your email app to complete your inquiry. Your details remain here if your email app does not open.');}
  return <form className="inquiry-form" onSubmit={submit}>
    <div className="form-grid three"><label>First Name *<input required name="firstName" placeholder="First name"/></label><label>Last Name *<input required name="lastName" placeholder="Last name"/></label><label>Phone Number *<input required type="tel" name="phone" placeholder="(000) 000-0000"/></label></div>
    <div className="form-grid two"><label>Email Address *<input required type="email" name="email" placeholder="you@example.com"/></label><label>Company / Operating Name *<input required name="company" placeholder="Your company name"/></label></div>
    <div className="form-grid three"><label>USDOT Number *<input required name="usdot" placeholder="USDOT #"/></label><label>MC Number (if applicable)<input name="mc" placeholder="MC #"/></label><label>Number of Trucks *<select required name="trucks"><option value="">Select number</option><option>1</option><option>2–5</option><option>6–10</option><option>11+</option></select></label></div>
    <div className="check-columns"><fieldset><legend>Primary Operating Areas *</legend><label><input type="checkbox" name="Operating area" value="U.S. (Domestic)"/> U.S. (Domestic)</label><label><input type="checkbox" name="Operating area" value="Canada (Cross-Border)"/> Canada (Cross-Border)</label><label><input type="checkbox" name="Operating area" value="Both U.S. & Canada"/> Both U.S. & Canada</label></fieldset><fieldset><legend>Equipment Type (check all that apply) *</legend><div className="equipment-grid"><label><input type="checkbox" name="Equipment" value="Dry Van"/> Dry Van</label><label><input type="checkbox" name="Equipment" value="Step Deck"/> Step Deck</label><label><input type="checkbox" name="Equipment" value="Reefer"/> Reefer</label><label><input type="checkbox" name="Equipment" value="Power Only"/> Power Only</label><label><input type="checkbox" name="Equipment" value="Flatbed"/> Flatbed</label><label><input type="checkbox" name="Equipment" value="Other"/> Other</label></div></fieldset></div>
    <div className="language-box"><strong>Preferred Language for Communication *</strong><div><label><input type="radio" name="Language" value="English" defaultChecked/> English</label><label><input type="radio" name="Language" value="French"/> French (Français)</label><label><input type="radio" name="Language" value="No preference"/> No Preference</label></div></div>
    <label>Tell Us About Your Needs *<textarea name="Needs" required rows="5" placeholder="Example: lanes, preferred regions, special requirements, start date, etc."/></label>
    <label className="agree"><input required type="checkbox"/> I agree to be contacted by Siranay Freight Management regarding dispatch and carrier support services.</label>
    <div className="form-submit"><button className="btn btn-gold" type="submit">Submit Inquiry →</button></div>
    <p className="form-note">Opens your email app with your inquiry details for you to send.</p>
    {sent && <p className="success-message" role="status">{sent}</p>}
  </form>
}
