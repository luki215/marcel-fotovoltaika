import * as mysql from 'mysql2';

const connectionStr = 'mysql://stats:password@localhost:3306/stats'
const connection = mysql.createConnection(connectionStr)

createDb(connection);

connection.end()


function createDb(connection: mysql.Connection) {
    connection.execute(`
        CREATE TABLE fv_data (
            cid INT NOT NULL,
            recorded DATETIME NOT NULL,
            load_output_switch INT NOT NULL,
            Inverter_bypass INT NOT NULL,
            PV_rated_power INT NOT NULL,
            Input_charging_voltage FLOAT NOT NULL,
            Input_charging_current FLOAT NOT NULL,
            Input_charging_power FLOAT NOT NULL,
            Input_charging_frequency INT NOT NULL,
            Total_charging_capacity INT NOT NULL,
            Status INT NOT NULL,
            Battery_temperature FLOAT NOT NULL,
            Inverter_discharging_input_voltage FLOAT NOT NULL,
            AC_load_voltage FLOAT NOT NULL,
            AC_load_current FLOAT NOT NULL,
            AC_load_status FLOAT NOT NULL,
            AC_load_frequency FLOAT NOT NULL,
            Inverter_total_daily_output_capacity FLOAT NOT NULL,
            Inverter_total_monthly_output_capacity FLOAT NOT NULL,
            Inverter_total_annually_output_capacity FLOAT NOT NULL,
            Inverter_total_output_capacity FLOAT NOT NULL,
            PV_voltage FLOAT NOT NULL,
            PV_current FLOAT NOT NULL,
            PV_power FLOAT NOT NULL,
            PV_daily_charging FLOAT NOT NULL,
            PV_monthly_charging FLOAT NOT NULL,
            PV_yearly_charging FLOAT NOT NULL,
            PV_total_charging FLOAT NOT NULL,
            PV_status FLOAT NOT NULL,
            Battery_voltage FLOAT NOT NULL,
            Battery_current FLOAT NOT NULL,
            Battery_current_NC FLOAT NOT NULL,
            Battery_Temp FLOAT NOT NULL,
            Battery_capacity FLOAT NOT NULL,
            Battery_status FLOAT NOT NULL,
            The_dry_contact_of_the_system_closes_the_accumulator_voltage FLOAT NOT NULL,
            The_system_dry_contact_disconnects_the_battery_voltage FLOAT NOT NULL,
            System_stop_auxiliary_charging_module_charging_voltage FLOAT NOT NULL,
            System_recovery_charging_voltage_of_auxiliary_charging_module FLOAT NOT NULL,
            System_charging_priority_mode FLOAT NOT NULL,
            System_output_priority_mode FLOAT NOT NULL,
            The_system_has_no_battery_mode FLOAT NOT NULL,
            System_charging_low_voltage_disconnect_recovery_voltage FLOAT NOT NULL,
            System_charging_low_voltage_disconnect_voltage  FLOAT NOT NULL,
            
            PRIMARY KEY (cid, recorded)
        )
    `)
}

