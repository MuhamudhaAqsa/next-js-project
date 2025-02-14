import NavBar from "./Components/NavBar/page"; 
import "./globals.css";

export default function RootLayout() { // No need for {children}
  return (
    <html lang="en">
      <body>
        <NavBar />
        {/* No {children} to keep the area below empty */}
      </body>
    </html>
  );
}
