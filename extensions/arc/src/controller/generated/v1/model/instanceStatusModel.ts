/**
 * SQL Server Big Data Cluster API
 * OpenAPI specification for **SQL Server Big Data Cluster**.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Dashboards } from './dashboards';

export class InstanceStatusModel {
    'instanceName'?: string;
    'state'?: string;
    'healthStatus'?: string;
    'details'?: string;
    'dashboards'?: Dashboards;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instanceName",
            "baseName": "instanceName",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "healthStatus",
            "baseName": "healthStatus",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "string"
        },
        {
            "name": "dashboards",
            "baseName": "dashboards",
            "type": "Dashboards"
        }    ];

    static getAttributeTypeMap() {
        return InstanceStatusModel.attributeTypeMap;
    }
}

