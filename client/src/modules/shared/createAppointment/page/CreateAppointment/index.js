import { withContainer } from "../../../../../shared";
import CreateAppointment from "./CreateAppointment";
import useCreateAppointment from "./useCreateAppointment";

export default withContainer(CreateAppointment, useCreateAppointment);
