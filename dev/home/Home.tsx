import * as React from "react";
import Button from '@material-ui/core/Button';

interface IHomeProps {
    header: string;
};

interface IState {
    allo: boolean;
};

export class Home extends React.Component<IHomeProps> {
    
    state: IState = {
        allo: false
    };

    constructor(props: IHomeProps) {
        super(props);

        this.onClick = this.onClick.bind(this);
    };

    onClick() {
        this.setState({ allo: !this.state.allo });
    };

    render() {
        return(
            <div>
                <div className="header">
                	<h1>{ this.props.header }</h1>
                </div>
                <div className="content">
                    <div>
                    	<img src={ require('./icon.png') }/>
                    </div>
                    
                        <Button variant="raised" color="primary" onClick={ this.onClick }>Press me</Button>

                        { this.state.allo ? (
                            <div>
                                <h1>Allo' Allo'</h1>
                            </div>
                        ) : (null) }
                    
                </div>
            </div>
        );
    };
};
