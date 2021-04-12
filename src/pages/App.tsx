import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "components/Header";
import { LoadingComponent } from "components/LoadingComponent";
import { useSampleStore } from "stores/SampleStore";
import { runInAction } from "mobx";
import Footer from "components/Footer";
import HomePage from "./HomePage";
import OtherPage from "./OtherPage";

const App: React.FC = observer(() => {
    const sampleStore = useSampleStore();
    useEffect(() => {
        runInAction(async () => await sampleStore.init());
        return () => sampleStore.dispose();
    }, []);
    return (
        <>
            <Header />
            <Container fluid className="mt-3">
                {sampleStore.isReady ? (
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route exact path="/otherpage" component={OtherPage}></Route>
                    </Switch>
                ) : (
                    <LoadingComponent />
                )}
            </Container>
            <Footer />
        </>
    );
});

export default App;
