import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Contacts</div>;
}

export default withRouter(Contacts);
