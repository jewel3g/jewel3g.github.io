# Electronics Hardware Engineering — Selected Case Studies

MD Anaet Ullah | [Portfolio](https://jewel3g.github.io)

These summaries distinguish employment experience from independent research. They contain no employer schematics, source code, test logs, internal specifications or confidential measurements. They do not claim employer endorsement, qualification or completed prototypes where not demonstrated.

## Professional experience

| Case study | Engineering contribution |
|---|---|
| Aircraft galley electronics — Safran Cabin | Six-layer PCB fault isolation, Altium updates, ARINC 812/CAN/UART communication testing, endurance testing, power analysis and DO-160 test support. |
| Industrial airflow measurement — Vectoflow | Mixed-signal 16-channel acquisition hardware, multichannel sensor boards, GNSS integration, bring-up and EMC pre-compliance support. |
| Solar inverter — Solarnative | Embedded C/C++ inverter firmware, reactive power correction and LTE/LoRa gateway integration. |
| Automotive radar — Bosch | End-of-line test software and test data analysis. |
| IoT instrumentation — Code 19 | pH and dissolved oxygen sensing, RFID tracking and embedded connectivity. |

## Independent design studies

### FlexSoC IMAX95 — in development
NXP i.MX 95, LPDDR4X, PMIC power sequencing, PCIe/NVMe, USB, Ethernet and display connectivity. [Project repository](https://github.com/jewel3g/FlexSoC).
Milestones: pin mapping and power budget; schematic ERC; stackup and signal integrity; PCB DRC; first-article bring-up and functional validation.

### Raspberry Pi CM5 carrier — design study
Goal: mechanically and electrically compatible carrier concept. Verify official connector drawings, mounting coordinates, keep-outs, power and interface pinout. Compatibility has not been demonstrated.

### High-speed PCB and LPDDR4X — design study
Develop stackup and routing constraints from processor and memory documentation. Verify impedance, return paths, reference transitions, via geometry, timing and differential routing. Do not assume rule compliance demonstrates signal integrity.

### PMIC sequencing — design study
Map required power domains, tolerances, current demand, sequencing, reset and fault handling. Validate startup and shutdown with appropriate instrumentation before connecting sensitive loads.

### Display interfaces — design study
Compare MIPI DSI, eDP and LVDS bridge architectures. Validate lane rates, AUX/HPD, panel power, backlight control and connector mapping against the exact display datasheet.

### FPGA development — project experience
Spartan, Artix, Kintex and Zynq families explored through project work. Suggested public demonstrators: UART/SPI interfaces, streaming data acquisition, clock-domain crossing and simulation testbenches. New demonstrators are planned, not claimed complete.

### Embedded Linux board bring-up — research
Prepare bootloader, device tree, BSP and reproducible serial-console diagnostics. Validate boot media, power, clock, reset and memory before peripheral enablement.

### EMC and hardware validation — methodology
Create a test plan with operating modes, fixtures, instrumentation calibration, acceptance criteria, deviations and retest evidence. Prior experience includes DO-160 and MIL-STD-461/810 test support; no certification is implied.

## Public software and hardware-related projects

- [PCB test automation](https://github.com/jewel3g/PCB-Test-Automation-with-Python)
- [Firmware testing](https://github.com/jewel3g/Automated-Firmware-Testing)
- [Signal analysis](https://github.com/jewel3g/Signal-Processing-Analysis)
- [Data acquisition](https://github.com/jewel3g/IoT-Data-Acquisition-Visualization)
- [MPPT solar inverter](https://github.com/jewel3g/MPPT_Solar_Inverter)

## Evidence policy
Publish only original or explicitly authorized design files. Clearly label design studies, prototype status and measured results; document test conditions before reporting performance.
