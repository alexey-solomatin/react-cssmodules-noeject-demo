import React, {Component} from "react";
import logo from "./logo.svg";
import styles from "./App.css";
import Button from "./components/Button/Button";
import SubmitButton from "./components/SubmitButton/SubmitButton";

class App extends Component {
    onClickHandler = (e) => {
        e.preventDefault();
        console.log("You've submitted!");
    };

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <Button name="Base Button"/>
                    <SubmitButton name="Submit Button" onClick={this.onClickHandler}/>
                </div>
                <p className={styles.intro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
