import React from "react"
import Layout from "../components/layout"


const ContactUs = () => (
  <Layout>
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Business name: <input type="text" name="business-name" />
          </label>
        </p>
        <p>
          <label>
            Phone: <input type="text" name="phone" />
          </label>
        </p>
        <p>
          <label>
            Address 1: <input type="text" name="address-1" />
          </label>
        </p>
        <p>
          <label>
            Address 2: <input type="text" name="address-2" />
          </label>
        </p>
        <p>
          <label>
            City: <input type="text" name="city" />
          </label>
        </p>
        <p>
          <label>
            State: <input type="text" name="state" />
          </label>
        </p>
        <p>
          <label>
            Zip: <input type="text" name="zip" />
          </label>
        </p>
        <p>
          <label>
            Fax: <input type="text" name="fax" />
          </label>
        </p>
        <p>
          <label>
            Project date: <input type="text" name="project-date" />
          </label>
        </p>
        

        <p>
          <label>
            Your Role:{" "}
            <select name="project-type[]" multiple>
              <option value="commercial">Commercial</option>
              <option value="agricultural">Agricultural</option>
              <option value="institutional">Institutional</option>
              <option value="concrete">Concrete</option>
              <option value="residential">Residential</option>
              <option value="other">Other</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default ContactUs