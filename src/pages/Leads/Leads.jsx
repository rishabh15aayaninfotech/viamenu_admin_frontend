import React, { Component } from "react";
import "./Leads.css";

export default class Leads extends Component {
  render() {
    return (
      <div className="leads-page">

        <div className="leads-card">

          {/* ROW 1 */}
          <div className="row g-4">
            <div className="col-md-4">
              <Field label="Anrede" value="Lorem" />
            </div>
            <div className="col-md-4">
              <Field label="Niederlassung in" value="Lorem" />
            </div>
            <div className="col-md-4">
              <Select label="Zugegeteilter Agent" value="Roland Rabe" />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="row g-4">
            <div className="col-md-2">
              <Field label="PLZ" />
            </div>
            <div className="col-md-4">
              <Select label="Stadt" value="ComboBox" />
            </div>
            <div className="col-md-3">
              <Field label="Anzahl Niederlassungen" value="Lorem" />
            </div>
            <div className="col-md-3">
              <Select label="Kontakt-Status" value="Roland Rabe" />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="row g-4">
            <div className="col-md-6">
              <Field label="Straße und Hausnr." value="Lorem" />
            </div>
            <div className="col-md-3">
              <Select label="Kategorie" value="ComboBox" />
            </div>
          </div>

          {/* ROW 4 */}
          <div className="row g-4">
            <div className="col-md-6">
              <Select label="Land" value="ComboBox" />
            </div>
            <div className="col-md-3">
              <Field label="Firmengröße" value="Lorem" />
            </div>
          </div>

          {/* ROW 5 */}
          <div className="row g-4">
            <div className="col-md-6">
              <h6 className="section-title">Anschrift:</h6>

              <Field label="Telefon" />
              <Field label="Telefon 2" />
              <Field label="Mobile" />
              <Field label="Alternative" value="Whatsapp" />
              <Field label="E-mail" />
              <Field label="Website" value="https://" />
            </div>

            <div className="col-md-6">
              <Field label="Anzahl der Mitarbeiter" value="Lorem" />

              <div className="lead-status">
                <h6>Lead-Status</h6>

                <div className="row g-3">
                  <div className="col-md-6">
                    <DateField label="Datum des ersten Kontakts" value="12.11.2024" />
                  </div>
                  <div className="col-md-6">
                    <Select label="Status" value="Interessiert" />
                  </div>
                </div>

                <Textarea
                  label="Statusinformation"
                  value="Detaillierte Statusinformation"
                />

                <Textarea
                  label="Info vom Erstkontakt"
                  value="Informationen zum ersten Kontakt mit dem Lead."
                />

                <Select label="Quelle des Leads" value="Empfehlung" />
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

/* ---------- REUSABLE COMPONENTS ---------- */

const Field = ({ label, value }) => (
  <div className="field">
    <label>{label}</label>
    <input defaultValue={value} />
  </div>
);

const Select = ({ label, value }) => (
  <div className="field select">
    <label>{label}</label>
    <input defaultValue={value} />
    <span className="arrow">▼</span>
  </div>
);

const DateField = ({ label, value }) => (
  <div className="field date">
    <label>{label}</label>
    <input defaultValue={value} />
    <span className="calendar">📅</span>
  </div>
);

const Textarea = ({ label, value }) => (
  <div className="field">
    <label>{label}</label>
    <textarea rows="3" defaultValue={value}></textarea>
  </div>
);
