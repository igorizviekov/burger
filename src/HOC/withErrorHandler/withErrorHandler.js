import React, { Fragment, Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/button";

function withErrorHandler(WrappedComponent, axios) {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    _isMounted = false;
    state = {
      error: false
    };

    componentDidMount() {
      this._isMounted = true;
    }

    errorConfirmedHandler = () => {
      this.setState({ error: false });
    }; //for close button

    constructor() {
      super();
      this.reqInterceptor = axios.interceptors.request.use(request => {
        if (this._isMounted) {
          this.setState({ error: null });
        }

        return request;
      });
      this.respInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({
            error: error
          });
        }
      );
    }

    // remove interceptors to improve performance
    componentWillUnmount() {
      this._isMounted = false;
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.respInterceptor);
    }

    render() {
      return (
        <Fragment>
          {this.state.error ? (
            <Modal show={this.state.error}>
              <div style={{ textAlign: "center", marginTop: "20%" }}>
                {this.state.error.message}
                <Button clicked={this.errorConfirmedHandler}>CLOSE</Button>
              </div>
            </Modal>
          ) : null}
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
}

export default withErrorHandler;
