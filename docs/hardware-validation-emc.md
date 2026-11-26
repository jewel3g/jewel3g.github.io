# Hardware validation and EMC — engineering methodology

This is a proposed reusable test framework based on electronics development experience. It does not represent a laboratory accreditation or product certification.

| Test area | Equipment / method | Evidence to record |
|---|---|---|
| Initial power-up | Current-limited supply, DMM | Input current, rail voltages, abnormal heating |
| Power sequencing | Oscilloscope | Rail timing, reset, overshoot, shutdown behavior |
| Digital interfaces | Logic analyzer, protocol tools | Frames, timing, errors and recovery |
| Analog acquisition | Calibrated source, DMM, oscilloscope | Gain, offset, noise, repeatability |
| Firmware | Serial tests, Python automation | Version, cases, expected and actual responses |
| Endurance | Defined operating cycles | Duration, environment, faults and recovery |
| EMC pre-compliance | Appropriate LISN, spectrum analyzer and fixtures | Setup, operating mode, plots and applicable limits |

## EMC workflow
Select the applicable product standard and edition before defining limits. Record cable configuration, grounding, operating mode, calibration, detector and measurement bandwidth. Investigate emissions and immunity failures systematically and repeat tests after changes. High-energy immunity tests require trained personnel and appropriate facilities.

Relevant professional exposure: RTCA DO-160, MIL-STD-461/810, ESD/EFT/surge, CISPR 11, IEC 62109 and DIN EN 61340-5-1, subject to project scope. No compliance claim is made.

## Test record template
Test ID | Requirement | Board revision | Firmware revision | Setup | Expected | Actual | Pass/fail | Evidence | Reviewer

[Portfolio](https://jewel3g.github.io)
