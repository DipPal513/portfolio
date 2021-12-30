import React from "react";

const BlogDetails = () => {
  const textStyle = {
    color: "var(--main-color)",
    fontWeight: 500,
  };
  const firstLetterStyle = {
    fontSize: "25px",
    fontWeight: "bold",
  };
  return (
    <div className="container">
      <h1 className="text-center my-5 text-info">what is JWT token?</h1>
      <div className="row">
        <div className="col-lg-8 align-items-center justify-content-center">
          <p className="" style={textStyle}>
            <span style={firstLetterStyle}>J</span>SON Web Token (JWT) is an
            open standard (RFC 7519) that defines a compact and self-contained
            way for securely transmitting information between parties as a JSON
            object. This information can be verified and trusted because it is
            digitally signed. JWTs can be signed using a secret (with the HMAC
            algorithm) or a public/private key pair using RSA or ECDSA. Although
            JWTs can be encrypted to also provide secrecy between parties, we
            will focus on signed tokens. Signed tokens can verify the integrity
            of the claims contained within it, while encrypted tokens hide those
            claims from other parties. When tokens are signed using
            public/private key pairs, the signature also certifies that only the
            party holding the private key is the one that signed it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
