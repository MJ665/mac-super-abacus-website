

function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEETS_ID_Between_/d/...../edit').getSheetByName('WebsiteContactForm');



function doPost(e) {
  const sheet = SpreadsheetApp.openById('1cIRVrfmIvRP8cZvtaYsTPXPNzFcFpvIafuxpg_qjbWA').getSheetByName('WebsiteContactForm');
  const formData = e.parameter;

  const name = formData.name;
  const email = formData.email;
  const phone_number = formData.phone_number;
  const message = formData.message;

  try {
    // Get current time in UTC
    const currentUtcTime = new Date();
    
    // Convert UTC to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is 5 hours 30 minutes ahead of UTC
    const istTime = new Date(currentUtcTime.getTime() + istOffset);

    // Format the IST time as a readable string
    const formattedISTTime = Utilities.formatDate(istTime, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

    // Append data to the spreadsheet including the timestamp
    sheet.appendRow([name, email, phone_number, message, formattedISTTime]);

    // Send an email notification
    const recipient = 'contact.superabacus@gmail.com'; // Replace with your email
    const subject = `New Contact Form Submission Super Abacus website Name: ${name}`;
    const body = `Hey Admin, New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone_number}\nMessage: ${message}\n\nSubmitted on: ${formattedISTTime} (IST)`;
    MailApp.sendEmail(recipient, subject, body);

    // Send a confirmation email to the user
    const userSubject = 'Thank You for Your Contact Form Submission';
    const userBody = `You have responded\n\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone_number}\nMessage: ${message}\n\nSubmitted on: ${formattedISTTime} (IST)\n\nIf you are unable to find this form, it may be in your spam or publicity folder. Thank you for contacting us. We have received your message and will get back to you soon.\n\nThank You!!! 😊🙏🙏🙏`;
    MailApp.sendEmail(email, userSubject, userBody);

    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: error.message }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Allow CORS for GET requests if needed
  return ContentService.createTextOutput('GET method is not supported.')
                       .setMimeType(ContentService.MimeType.TEXT);
}
