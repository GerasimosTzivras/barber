import { Page } from "shared";

const steps = [
  { label: "Επιλογή κουρέματος" },
  { label: "Επιλογή κουρέα" },
  { label: "Ημερομηνία ραντεβού" },
  { label: "Πληροφορίες πελάτη" },
  { label: "Οριστικοποίηση" },
];

function CreateAppointment() {
  return (
    <Page>
      <Page.Header>
        <Page.Header.Title title="Προσθήκη ραντεβού" />
      </Page.Header>
      <Page.Content></Page.Content>
    </Page>
  );
}

export default CreateAppointment;
