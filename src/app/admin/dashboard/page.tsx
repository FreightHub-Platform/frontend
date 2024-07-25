import SummaryCardSmall from "../../../components/admin/dashboard/SummaryCardSmall";

const Admin = () => {
  return (
    <div className="flex flex-row gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
      <SummaryCardSmall borderColor="#4e46e590" hoverBorderColor="#4e46e5"/>
      <SummaryCardSmall borderColor="#06ce6390" hoverBorderColor="#04a152"/>
      <SummaryCardSmall borderColor="#d148ec90" hoverBorderColor="#cf34d4"/>
      <SummaryCardSmall borderColor="#e5464e90" hoverBorderColor="#c53030"/>
    </div>
  );
};

export default Admin;
