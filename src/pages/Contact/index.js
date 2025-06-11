import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <div className="contact-us-wrapper py-5 px-3 px-md-5 bg-light">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Contact Us</h1>
        <div className="row gy-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <Card className="shadow-sm h-100">
              <CardHeader>
                <h4 className="fw-semibold">Send a Message</h4>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="mb-3">
                    <Input type="text" placeholder="Your Name" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <Input type="email" placeholder="Your Email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <Textarea placeholder="Your Message" rows={5} className="form-control" />
                  </div>
                  <Button type="submit" className="w-100 btn-primary mt-2">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map + Contact Details */}
          <div className="col-lg-6">
            <Card className="shadow-sm h-100">
              <CardHeader>
                <h4 className="fw-semibold">Visit Us</h4>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086544149249!2d-122.4194160846825!3d37.77492977975927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74b2f2ff%3A0x3a1e9f3b5e5d07b5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615840389869"
                    width="100%"
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                    style={{ borderRadius: "8px", border: 0 }}
                    title="Location Map"
                  />
                </div>
                <p className="mb-1"><strong>Address:</strong> 123 Innovation Street, San Francisco, CA</p>
                <p className="mb-1"><strong>Phone:</strong> (123) 456-7890</p>
                <p className="mb-1"><strong>Email:</strong> info@example.com</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Follow Us */}
        <div className="row mt-5">
          <div className="col">
            <Card className="shadow-sm text-center">
              <CardHeader>
                <h4 className="fw-semibold">Follow Us</h4>
              </CardHeader>
              <CardContent className="d-flex justify-content-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-3 text-primary"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter-x fs-3 text-dark"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-3 text-danger"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin fs-3 text-primary"></i>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
