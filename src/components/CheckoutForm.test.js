import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.queryByLabelText(/First Name:/i);
    const lastName = screen.queryByLabelText(/last name:/i);
    const address = screen.queryByLabelText(/address:/i);
    const city = screen.queryByLabelText(/city:/i);
    const state = screen.queryByLabelText(/state:/i);
    const zip = screen.queryByLabelText(/zip:/i);
    const button = screen.getByRole('button', {name:/checkout/i})

    userEvent.type(firstName, "courtney");
    userEvent.type(lastName, "Cooper");
    userEvent.type(address, "13203 e rich ave");
    userEvent.type(city, "spokane");
    userEvent.type(state, "WA");
    userEvent.type(zip, "99216")
    userEvent.click(button);

    const submit = screen.queryByText(/courtney/i, /cooper/i, /13203 e rich/i, /spokane/i, /WA/i, /99216/i);
    expect(submit).toBeInTheDocument();
});
