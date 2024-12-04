    const parent = document.getElementById("root");
    const element = React.createElement("h1", {}, "shopping cart app");
    const root = ReactDOM.createRoot(parent);
    const item1 = React.createElement("li", {}, "Item1");
    const item2 = React.createElement("li", {}, "Item2");
    const list = React.createElement("ul", {}, item1, item2);
    root.render([element, list]);

    // const parent = document.getElementById("root");
    // const element = <h1> Shopping Cart App </h1>;
    // const root = ReactDOM.createRoot(parent);
    // root.render(element);   

            int noas = 0, nobs = 0; 
            int noat = 0, nobt = 0; 
            for (int j = 0; j < n; j++) {
                if (s.charAt(j) == 'a') {
                    noas++;
                } else if (s.charAt(j) == 'b') {
                    nobs++;
                }
            }
            for (int j = 0; j < m; j++) {
                if (t.charAt(j) == 'a') {
                    noat++;
                } else if (t.charAt(j) == 'b') {
                    nobt++;
                }
            }
            if ((noas == 0 && noat > 0) || (noat == 0 && noas > 0)) {
                System.out.println("No");
            } else if ((nobs == nobt && noas == noat) || (noas > 0 && noat > 0)) {
                System.out.println("Yes");
            } else {
                System.out.println("No");
            }
        }