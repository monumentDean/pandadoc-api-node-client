/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DocumentDetailsResponseCreatedBy } from './DocumentDetailsResponseCreatedBy';
import { DocumentDetailsResponseGrandTotal } from './DocumentDetailsResponseGrandTotal';
import { DocumentDetailsResponseLinkedObjects } from './DocumentDetailsResponseLinkedObjects';
import { DocumentDetailsResponseRecipients } from './DocumentDetailsResponseRecipients';
import { DocumentDetailsResponseTemplate } from './DocumentDetailsResponseTemplate';
import { PricingTablesResponse } from './PricingTablesResponse';
import { HttpFile } from '../http/http';

export class DocumentDetailsResponse {
    'id'?: string;
    'name'?: string;
    'autonumberingSequenceNamePrefix'?: any;
    'dateCreated'?: string;
    'dateModified'?: string;
    'dateCompleted'?: string;
    'createdBy'?: DocumentDetailsResponseCreatedBy;
    'template'?: DocumentDetailsResponseTemplate;
    'expirationDate'?: any;
    'metadata'?: any;
    'tokens'?: Array<any>;
    'fields'?: Array<any>;
    'pricing'?: PricingTablesResponse;
    'version'?: string;
    'tags'?: Array<string>;
    'sentBy'?: any;
    'recipients'?: Array<DocumentDetailsResponseRecipients>;
    'grandTotal'?: DocumentDetailsResponseGrandTotal;
    'linkedObjects'?: Array<DocumentDetailsResponseLinkedObjects>;
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "autonumberingSequenceNamePrefix",
            "baseName": "autonumbering_sequence_name_prefix",
            "type": "any",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCompleted",
            "baseName": "date_completed",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "DocumentDetailsResponseCreatedBy",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "DocumentDetailsResponseTemplate",
            "format": ""
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "any",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "pricing",
            "baseName": "pricing",
            "type": "PricingTablesResponse",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sentBy",
            "baseName": "sent_by",
            "type": "any",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<DocumentDetailsResponseRecipients>",
            "format": ""
        },
        {
            "name": "grandTotal",
            "baseName": "grand_total",
            "type": "DocumentDetailsResponseGrandTotal",
            "format": ""
        },
        {
            "name": "linkedObjects",
            "baseName": "linked_objects",
            "type": "Array<DocumentDetailsResponseLinkedObjects>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentDetailsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

