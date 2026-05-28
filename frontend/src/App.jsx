import { Link, Routes, Route } from "react-router-dom";
import Aside from "./component/Aside";
import verifiy from "./assets/verification_badge.svg";
import Create from "./pages/Create";
import Verified from "./pages/Verified";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <main id="main_page">
      <section id="inner_main">
        <Aside />
        <section id="org_byte_forms">
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/verified" element={<Verified />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </section>
      </section>
    </main>
  );
}

export default App;
