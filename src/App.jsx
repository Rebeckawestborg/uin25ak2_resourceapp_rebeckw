import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import "./styles.scss";

function App() {
  return (
    <Router>
      <PageTitle />
      <Layout>
        <Nav />
        <Routes>
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/headless-cms" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

