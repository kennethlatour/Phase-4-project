import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
      <div>
        <Link href="/projects">Projects</Link>
        <Link href="/createProjects">Create Projects</Link>
     </div>
  )
}

export default Navigation;