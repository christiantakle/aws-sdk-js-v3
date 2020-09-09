import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN). </p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * <p>The Kinesis Data Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Data Analytics application. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationCloudWatchLoggingOptionRequest {
  export const filterSensitiveLog = (obj: AddApplicationCloudWatchLoggingOptionRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * <p>The application's ARN.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The descriptions of the current CloudWatch logging options for the Kinesis Data Analytics application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>The new version ID of the Kinesis Data Analytics application. Kinesis Data Analytics
   *       updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options. </p>
   */
  ApplicationVersionId?: number;
}

export namespace AddApplicationCloudWatchLoggingOptionResponse {
  export const filterSensitiveLog = (obj: AddApplicationCloudWatchLoggingOptionResponse): any => ({
    ...obj,
  });
}

export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * <p>The version of the application to which you want to add the input processing
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       current application version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to add to the application.</p>
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;

  /**
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *       can get a list of the input IDs for an application using the <a>DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;

  /**
   * <p>The name of the application to which you want to add the input processing
   *       configuration.</p>
   */
  ApplicationName: string | undefined;
}

export namespace AddApplicationInputProcessingConfigurationRequest {
  export const filterSensitiveLog = (obj: AddApplicationInputProcessingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationInputProcessingConfigurationResponse {
  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Amazon
   *       Kinesis Data Analytics assigns to each input configuration that you add to your
   *       application.</p>
   */
  InputId?: string;
}

export namespace AddApplicationInputProcessingConfigurationResponse {
  export const filterSensitiveLog = (obj: AddApplicationInputProcessingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface AddApplicationInputRequest {
  /**
   * <p>The <a>Input</a> to add.</p>
   */
  Input: Input | undefined;

  /**
   * <p>The name of your existing application to which you want to add the streaming
   *       source.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current version of your application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationInputRequest {
  export const filterSensitiveLog = (obj: AddApplicationInputRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationInputResponse {
  /**
   * <p>Describes the application input configuration.
   *
   *
   *     </p>
   */
  InputDescriptions?: InputDescription[];

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;
}

export namespace AddApplicationInputResponse {
  export const filterSensitiveLog = (obj: AddApplicationInputResponse): any => ({
    ...obj,
  });
}

export interface AddApplicationOutputRequest {
  /**
   * <p>The name of the application to which you want to add the output configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>An array of objects, each describing one output configuration. In the output
   *       configuration, you specify the name of an in-application stream, a destination (that is, a
   *       Kinesis data stream, a Kinesis Data Firehose delivery stream, or an AWS Lambda function), and
   *       record the formation to use when writing to the destination.</p>
   */
  Output: Output | undefined;

  /**
   * <p>The version of the application to which you want to add the output configuration. You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned. </p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationOutputRequest {
  export const filterSensitiveLog = (obj: AddApplicationOutputRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationOutputResponse {
  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when the
   *       application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Describes the application output configuration.
   *       For more information,
   *       see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *     </p>
   */
  OutputDescriptions?: OutputDescription[];
}

export namespace AddApplicationOutputResponse {
  export const filterSensitiveLog = (obj: AddApplicationOutputResponse): any => ({
    ...obj,
  });
}

export interface AddApplicationReferenceDataSourceRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data
   *       into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is
   *       created. </p>
   */
  ReferenceDataSource: ReferenceDataSource | undefined;

  /**
   * <p>The version of the application for which you are adding the reference data source. You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationReferenceDataSourceRequest {
  export const filterSensitiveLog = (obj: AddApplicationReferenceDataSourceRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationReferenceDataSourceResponse {
  /**
   * <p>The updated application version ID. Amazon Kinesis Data Analytics increments this ID when
   *       the application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes reference data sources configured for the application.
   *
   *
   *
   *     </p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;
}

export namespace AddApplicationReferenceDataSourceResponse {
  export const filterSensitiveLog = (obj: AddApplicationReferenceDataSourceResponse): any => ({
    ...obj,
  });
}

export interface AddApplicationVpcConfigurationRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Description of the VPC to add to the application.</p>
   */
  VpcConfiguration: VpcConfiguration | undefined;

  /**
   * <p>The version of the application to which you want to add the input processing
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       current application version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationVpcConfigurationRequest {
  export const filterSensitiveLog = (obj: AddApplicationVpcConfigurationRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationVpcConfigurationResponse {
  /**
   * <p>Provides the current application version. Kinesis Data Analytics updates the ApplicationVersionId each time you update the application. </p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The parameters of the new VPC configuration.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;

  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN?: string;
}

export namespace AddApplicationVpcConfigurationResponse {
  export const filterSensitiveLog = (obj: AddApplicationVpcConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes code configuration for a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationCodeConfiguration {
  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | string | undefined;

  /**
   * <p>The location and type of the application code.</p>
   */
  CodeContent?: CodeContent;
}

export namespace ApplicationCodeConfiguration {
  export const filterSensitiveLog = (obj: ApplicationCodeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes code configuration for a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationCodeConfigurationDescription {
  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | string | undefined;

  /**
   * <p>Describes details about the location and format of the application code.</p>
   */
  CodeContentDescription?: CodeContentDescription;
}

export namespace ApplicationCodeConfigurationDescription {
  export const filterSensitiveLog = (obj: ApplicationCodeConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationCodeConfigurationUpdate {
  /**
   * <p>Describes updates to the code content type.</p>
   */
  CodeContentTypeUpdate?: CodeContentType | string;

  /**
   * <p>Describes updates to the code content of an application.</p>
   */
  CodeContentUpdate?: CodeContentUpdate;
}

export namespace ApplicationCodeConfigurationUpdate {
  export const filterSensitiveLog = (obj: ApplicationCodeConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the creation parameters for an Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationConfiguration {
  /**
   * <p>The code location and type parameters for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfiguration: ApplicationCodeConfiguration | undefined;

  /**
   * <p>The creation and update parameters for a Java-based Kinesis Data Analytics
   *       application.</p>
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentProperties?: EnvironmentProperties;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurations?: VpcConfiguration[];

  /**
   * <p>The creation and update parameters for an SQL-based Kinesis Data Analytics
   *       application.</p>
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration;
}

export namespace ApplicationConfiguration {
  export const filterSensitiveLog = (obj: ApplicationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes details about the application code and starting parameters for an Amazon Kinesis
 *       Data Analytics application.</p>
 */
export interface ApplicationConfigurationDescription {
  /**
   * <p>The details about a Java-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics
   *       application.</p>
   */
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationDescriptions?: VpcConfigurationDescription[];

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  /**
   * <p>The details about the application code for a Java-based Kinesis Data Analytics
   *       application.</p>
   */
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  /**
   * <p>The details about the starting properties for a Kinesis Data Analytics application.</p>
   */
  RunConfigurationDescription?: RunConfigurationDescription;

  /**
   * <p>The details about inputs, outputs, and reference data sources for an SQL-based Kinesis
   *       Data Analytics application.</p>
   */
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;
}

export namespace ApplicationConfigurationDescription {
  export const filterSensitiveLog = (obj: ApplicationConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to an application's configuration.</p>
 */
export interface ApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's code
   *       configuration.</p>
   */
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  /**
   * <p>Updates to the array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationUpdates?: VpcConfigurationUpdate[];

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  /**
   * <p>Describes updates to an SQL-based Kinesis Data Analytics application's
   *       configuration.</p>
   */
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the environment properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;

  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's configuration.</p>
   */
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;
}

export namespace ApplicationConfigurationUpdate {
  export const filterSensitiveLog = (obj: ApplicationConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
 *       latest version, and input and output configurations.</p>
 */
export interface ApplicationDetail {
  /**
   * <p>The current timestamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>The description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>Provides details about the application's SQL or Java code and starting parameters.</p>
   */
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;

  /**
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Provides the current application version. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you update the application.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>Specifies the IAM role that the application uses to access external resources.</p>
   */
  ServiceExecutionRole?: string;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>The current timestamp when the application was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace ApplicationDetail {
  export const filterSensitiveLog = (obj: ApplicationDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the method and snapshot to use when restarting an application using previously saved application state.</p>
 */
export interface ApplicationRestoreConfiguration {
  /**
   * <p>The identifier of an existing snapshot of application state to use to restart an application.
   *       The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the <code>ApplicationRestoreType</code>.</p>
   */
  SnapshotName?: string;

  /**
   * <p>Specifies how the application should be restored.</p>
   */
  ApplicationRestoreType: ApplicationRestoreType | string | undefined;
}

export namespace ApplicationRestoreConfiguration {
  export const filterSensitiveLog = (obj: ApplicationRestoreConfiguration): any => ({
    ...obj,
  });
}

export enum ApplicationRestoreType {
  RESTORE_FROM_CUSTOM_SNAPSHOT = "RESTORE_FROM_CUSTOM_SNAPSHOT",
  RESTORE_FROM_LATEST_SNAPSHOT = "RESTORE_FROM_LATEST_SNAPSHOT",
  SKIP_RESTORE_FROM_SNAPSHOT = "SKIP_RESTORE_FROM_SNAPSHOT",
}

/**
 * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfiguration {
  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

export namespace ApplicationSnapshotConfiguration {
  export const filterSensitiveLog = (obj: ApplicationSnapshotConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationDescription {
  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

export namespace ApplicationSnapshotConfigurationDescription {
  export const filterSensitiveLog = (obj: ApplicationSnapshotConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationUpdate {
  /**
   * <p>Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabledUpdate: boolean | undefined;
}

export namespace ApplicationSnapshotConfigurationUpdate {
  export const filterSensitiveLog = (obj: ApplicationSnapshotConfigurationUpdate): any => ({
    ...obj,
  });
}

export enum ApplicationStatus {
  DELETING = "DELETING",
  READY = "READY",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

/**
 * <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;
}

export namespace ApplicationSummary {
  export const filterSensitiveLog = (obj: ApplicationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.
 *       For more information, see
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance">
 *         Checkpoints for Fault Tolerance</a> in the
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>.</p>
 */
export interface CheckpointConfiguration {
  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> vaue of 60000, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes whether the application uses Amazon Kinesis Data Analytics' default checkpointing behavior.
   *     You must set this property to <code>CUSTOM</code> in order to set the
   *       <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters.</p>
   *          <note>
   *             <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or
   *     application code:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CheckpointingEnabled:</b> true</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>CheckpointInterval:</b> 60000</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>MinPauseBetweenCheckpoints:</b> 5000</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a
   *       new checkpoint operation can start. If a checkpoint operation takes longer than the
   *         <code>CheckpointInterval</code>, the application otherwise performs continual checkpoint
   *       operations. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/ops/state/large_state_tuning.html#tuning-checkpointing"> Tuning Checkpointing</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink
   *         Documentation</a>.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpoints?: number;

  /**
   * <p>Describes whether checkpointing is enabled for a Java-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value
   *       is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;
}

export namespace CheckpointConfiguration {
  export const filterSensitiveLog = (obj: CheckpointConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface CheckpointConfigurationDescription {
  /**
   * <p>Describes whether checkpointing is enabled for a Java-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation
   *       can start. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpoints?: number;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> vaue of 60000, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes whether the application uses the default checkpointing behavior in Kinesis Data
   *       Analytics. </p>
   *          <note>
   *             <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or
   *     application code:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CheckpointingEnabled:</b> true</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>CheckpointInterval:</b> 60000</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>MinPauseBetweenCheckpoints:</b> 5000</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ConfigurationType?: ConfigurationType | string;
}

export namespace CheckpointConfigurationDescription {
  export const filterSensitiveLog = (obj: CheckpointConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis
 *       Data Analytics application.</p>
 */
export interface CheckpointConfigurationUpdate {
  /**
   * <p>Describes updates to whether checkpointing is enabled for an application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to the interval in milliseconds between checkpoint operations.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> vaue of 60000, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointIntervalUpdate?: number;

  /**
   * <p>Describes updates to whether the application uses the default checkpointing behavior of
   *       Kinesis Data Analytics. You must set this property to <code>CUSTOM</code> in order to set the
   *       <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters.
   *       </p>
   *          <note>
   *             <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or
   *     application code:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CheckpointingEnabled:</b> true</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>CheckpointInterval:</b> 60000</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>MinPauseBetweenCheckpoints:</b> 5000</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation
   *       can start.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpointsUpdate?: number;
}

export namespace CheckpointConfigurationUpdate {
  export const filterSensitiveLog = (obj: CheckpointConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a description of Amazon CloudWatch logging options, including the log stream
 *       Amazon Resource Name (ARN). </p>
 */
export interface CloudWatchLoggingOption {
  /**
   * <p>The ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;
}

export namespace CloudWatchLoggingOption {
  export const filterSensitiveLog = (obj: CloudWatchLoggingOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * <p>The ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * <p>The IAM ARN of the role to use to send application messages. </p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications created with the current API version have an
   *         application-level service execution role rather than a resource-level role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export namespace CloudWatchLoggingOptionDescription {
  export const filterSensitiveLog = (obj: CloudWatchLoggingOptionDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * <p>The ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   */
  LogStreamARNUpdate?: string;
}

export namespace CloudWatchLoggingOptionUpdate {
  export const filterSensitiveLog = (obj: CloudWatchLoggingOptionUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies either the application code, or the location of the application code, for a
 *       Java-based Amazon Kinesis Data Analytics application. </p>
 */
export interface CodeContent {
  /**
   * <p>The zip-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  ZipFileContent?: Uint8Array;

  /**
   * <p>The text-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  TextContent?: string;

  /**
   * <p>Information about the Amazon S3 bucket containing the application code.</p>
   */
  S3ContentLocation?: S3ContentLocation;
}

export namespace CodeContent {
  export const filterSensitiveLog = (obj: CodeContent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes details about the application code for a Java-based Kinesis Data
 *       Analytics application.</p>
 */
export interface CodeContentDescription {
  /**
   * <p>The size in bytes of the application code. Can be used to validate zip-format code.</p>
   */
  CodeSize?: number;

  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application
   *       code stored in Amazon S3.</p>
   */
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;

  /**
   * <p>The text-format code</p>
   */
  TextContent?: string;

  /**
   * <p>The checksum that can be used to validate zip-format code.</p>
   */
  CodeMD5?: string;
}

export namespace CodeContentDescription {
  export const filterSensitiveLog = (obj: CodeContentDescription): any => ({
    ...obj,
  });
}

export enum CodeContentType {
  PLAINTEXT = "PLAINTEXT",
  ZIPFILE = "ZIPFILE",
}

/**
 * <p>Describes an update to the code of a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface CodeContentUpdate {
  /**
   * <p>Describes an update to the zipped code for an application.</p>
   */
  ZipFileContentUpdate?: Uint8Array;

  /**
   * <p>Describes an update to the text code for an application.</p>
   */
  TextContentUpdate?: string;

  /**
   * <p>Describes an update to the location of code for an application.</p>
   */
  S3ContentLocationUpdate?: S3ContentLocationUpdate;
}

export namespace CodeContentUpdate {
  export const filterSensitiveLog = (obj: CodeContentUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 */
export interface CodeValidationException extends __SmithyException, $MetadataBearer {
  name: "CodeValidationException";
  $fault: "client";
  Message?: string;
}

export namespace CodeValidationException {
  export const filterSensitiveLog = (obj: CodeValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

export enum ConfigurationType {
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT",
}

export interface CreateApplicationRequest {
  /**
   * <p>The name of your application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>A summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>Use this parameter to configure the application.</p>
   */
  ApplicationConfiguration?: ApplicationConfiguration;

  /**
   * <p>The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose
   *       delivery streams, Amazon S3 objects, and other external resources.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>Use this parameter to configure an Amazon CloudWatch log stream to monitor application
   *       configuration errors.
   *       </p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *         For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateApplicationRequest {
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
  });
}

export interface CreateApplicationResponse {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Kinesis Data Analytics returns a
   *       response with details of the application it created.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace CreateApplicationResponse {
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj,
  });
}

export interface CreateApplicationSnapshotRequest {
  /**
   * <p>An identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;

  /**
   * <p>The name of an existing application</p>
   */
  ApplicationName: string | undefined;
}

export namespace CreateApplicationSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateApplicationSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateApplicationSnapshotResponse {}

export namespace CreateApplicationSnapshotResponse {
  export const filterSensitiveLog = (obj: CreateApplicationSnapshotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based application, provides additional mapping information when the record
 *       format uses delimiters, such as CSV. For example, the following sample records use CSV format,
 *       where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as
 *       the column delimiter: </p>
 *
 *          <p>
 *             <code>"name1", "address1"</code>
 *          </p>
 *          <p>
 *             <code>"name2", "address2"</code>
 *          </p>
 */
export interface CSVMappingParameters {
  /**
   * <p>The row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical
   *       row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;

  /**
   * <p>The column delimiter. For example, in a CSV format, a comma (",") is the typical column
   *       delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;
}

export namespace CSVMappingParameters {
  export const filterSensitiveLog = (obj: CSVMappingParameters): any => ({
    ...obj,
  });
}

export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the Amazon CloudWatch logging option to
   *       delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a>DescribeApplication</a> operation. </p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>The version ID of the application. You can retrieve the application version ID using
   *     <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace DeleteApplicationCloudWatchLoggingOptionRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationCloudWatchLoggingOptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * <p>The version ID of the application. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the remaining CloudWatch logging options for the application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>The application's Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;
}

export namespace DeleteApplicationCloudWatchLoggingOptionResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationCloudWatchLoggingOptionResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * <p>The ID of the input configuration from which to delete the input processing
   *       configuration. You can get a list of the input IDs for an application by using the <a>DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;

  /**
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace DeleteApplicationInputProcessingConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationInputProcessingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;
}

export namespace DeleteApplicationInputProcessingConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationInputProcessingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationOutputRequest {
  /**
   * <p>The ID of the configuration to delete. Each output configuration that is added to the
   *       application (either when the application is created or later) using the <a>AddApplicationOutput</a> operation has a unique ID. You need to provide the ID to
   *       uniquely identify the output configuration that you want to delete from the application
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       specific <code>OutputId</code>. </p>
   */
  OutputId: string | undefined;

  /**
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace DeleteApplicationOutputRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationOutputRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationOutputResponse {
  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;
}

export namespace DeleteApplicationOutputResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationOutputResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * <p>The ID of the reference data source. When you add a reference data source to your
   *       application using the <a>AddApplicationReferenceDataSource</a>, Kinesis Data
   *       Analytics assigns an ID. You can use the <a>DescribeApplication</a> operation to
   *       get the reference ID. </p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified
   *       is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace DeleteApplicationReferenceDataSourceRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationReferenceDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationReferenceDataSourceResponse {
  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;
}

export namespace DeleteApplicationReferenceDataSourceResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationReferenceDataSourceResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationRequest {
  /**
   * <p>Use the <code>DescribeApplication</code> operation to get this value.</p>
   */
  CreateTimestamp: Date | undefined;

  /**
   * <p>The name of the application to delete.</p>
   */
  ApplicationName: string | undefined;
}

export namespace DeleteApplicationRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationResponse {}

export namespace DeleteApplicationResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationSnapshotRequest {
  /**
   * <p>The creation timestamp of the application snapshot to delete. You can retrieve this value using
   *       or .</p>
   */
  SnapshotCreationTimestamp: Date | undefined;

  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier for the snapshot delete.</p>
   */
  SnapshotName: string | undefined;
}

export namespace DeleteApplicationSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationSnapshotResponse {}

export namespace DeleteApplicationSnapshotResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationSnapshotResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationVpcConfigurationRequest {
  /**
   * <p>The current application version ID. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the VPC configuration to delete.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace DeleteApplicationVpcConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteApplicationVpcConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationVpcConfigurationResponse {
  /**
   * <p>The ARN of the Kinesis Data Analytics application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

export namespace DeleteApplicationVpcConfigurationResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationVpcConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeApplicationRequest {
  /**
   * <p>Displays verbose information about a Kinesis Data Analytics application, including the application's job plan.</p>
   */
  IncludeAdditionalDetails?: boolean;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace DescribeApplicationRequest {
  export const filterSensitiveLog = (obj: DescribeApplicationRequest): any => ({
    ...obj,
  });
}

export interface DescribeApplicationResponse {
  /**
   * <p>Provides a description of the application, such as the application's Amazon Resource Name
   *       (ARN), status, and latest version.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace DescribeApplicationResponse {
  export const filterSensitiveLog = (obj: DescribeApplicationResponse): any => ({
    ...obj,
  });
}

export interface DescribeApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier of an application snapshot. You can retrieve this value using .</p>
   */
  SnapshotName: string | undefined;
}

export namespace DescribeApplicationSnapshotRequest {
  export const filterSensitiveLog = (obj: DescribeApplicationSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DescribeApplicationSnapshotResponse {
  /**
   * <p>An object containing information about the application snapshot.</p>
   */
  SnapshotDetails: SnapshotDetails | undefined;
}

export namespace DescribeApplicationSnapshotResponse {
  export const filterSensitiveLog = (obj: DescribeApplicationSnapshotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the data format when records are written to the destination in an SQL-based
 *       Amazon Kinesis Data Analytics application. </p>
 */
export interface DestinationSchema {
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

export namespace DestinationSchema {
  export const filterSensitiveLog = (obj: DestinationSchema): any => ({
    ...obj,
  });
}

export interface DiscoverInputSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *       object.</p>
   */
  S3Configuration?: S3Configuration;

  /**
   * <p>The ARN of the role that is used to access the streaming source.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>The point at which you want Kinesis Data Analytics to start reading records from the
   *       specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}

export namespace DiscoverInputSchemaRequest {
  export const filterSensitiveLog = (obj: DiscoverInputSchemaRequest): any => ({
    ...obj,
  });
}

export interface DiscoverInputSchemaResponse {
  /**
   * <p>The schema inferred from the streaming source. It identifies the format of the data in the
   *       streaming source and how each data element maps to corresponding columns in the in-application
   *       stream that you can create.</p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>The stream data that was modified by the processor specified in the
   *         <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: string[];

  /**
   * <p>The raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: string[][];
}

export namespace DiscoverInputSchemaResponse {
  export const filterSensitiveLog = (obj: DiscoverInputSchemaResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes execution properties for a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface EnvironmentProperties {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

export namespace EnvironmentProperties {
  export const filterSensitiveLog = (obj: EnvironmentProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the execution properties for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface EnvironmentPropertyDescriptions {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroupDescriptions?: PropertyGroup[];
}

export namespace EnvironmentPropertyDescriptions {
  export const filterSensitiveLog = (obj: EnvironmentPropertyDescriptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to the execution property groups for a Java-based Amazon
 *       Kinesis Data Analytics application.</p>
 */
export interface EnvironmentPropertyUpdates {
  /**
   * <p>Describes updates to the execution property groups.</p>
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

export namespace EnvironmentPropertyUpdates {
  export const filterSensitiveLog = (obj: EnvironmentPropertyUpdates): any => ({
    ...obj,
  });
}

/**
 * <p>Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface FlinkApplicationConfiguration {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the
   *       process of persisting application state for fault tolerance.
   *       For more information, see
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance">
   *         Checkpoints for Fault Tolerance</a> in the
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. </p>
   */
  CheckpointConfiguration?: CheckpointConfiguration;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfiguration?: MonitoringConfiguration;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export namespace FlinkApplicationConfiguration {
  export const filterSensitiveLog = (obj: FlinkApplicationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface FlinkApplicationConfigurationDescription {
  /**
   * <p>The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink
   *         Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.</p>
   */
  JobPlanDescription?: string;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;

  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;
}

export namespace FlinkApplicationConfigurationDescription {
  export const filterSensitiveLog = (obj: FlinkApplicationConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to the configuration parameters for a Java-based Amazon Kinesis
 *       Data Analytics application.</p>
 */
export interface FlinkApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to the parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;

  /**
   * <p>Describes updates to the configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  /**
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;
}

export namespace FlinkApplicationConfigurationUpdate {
  export const filterSensitiveLog = (obj: FlinkApplicationConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkRunConfiguration {
  /**
   * <p>When restoring from a savepoint, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program.
   *      This will happen if the program is updated between savepoints to remove stateful parameters, and state data in the savepoint no longer
   *      corresponds to valid application data. For more information, see
   *      <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/savepoints.html#allowing-non-restored-state">
   *        Allowing Non-Restored State</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *          documentation</a>.</p>
   */
  AllowNonRestoredState?: boolean;
}

export namespace FlinkRunConfiguration {
  export const filterSensitiveLog = (obj: FlinkRunConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>When you configure the application input for an SQL-based Amazon Kinesis Data Analytics
 *       application, you specify the streaming source, the in-application stream name that is created,
 *       and the mapping between the two. </p>
 */
export interface Input {
  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps
   *       to corresponding columns in the in-application stream that is being created.</p>
   *          <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;

  /**
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * <p>The name prefix to use when creating an in-application stream. Suppose that you specify a
   *       prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more
   *       (as per the <code>InputParallelism</code> count you specified) in-application streams with the
   *       names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and
   *       so on. </p>
   */
  NamePrefix: string | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received
   *       from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is
   *       <a>InputLambdaProcessor</a>. </p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   */
  InputParallelism?: InputParallelism;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the application input configuration for an SQL-based Amazon Kinesis Data
 *       Analytics application. </p>
 */
export interface InputDescription {
  /**
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data
   *       stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis
   *       Data Analytics assigns to each input configuration that you add to your application. </p>
   */
  InputId?: string;

  /**
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   */
  InAppStreamNames?: string[];

  /**
   * <p>The point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>The in-application name prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}

export namespace InputDescription {
  export const filterSensitiveLog = (obj: InputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is
 *       used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics
 *       application. </p>
 */
export interface InputLambdaProcessor {
  /**
   * <p>The ARN of the AWS Lambda function that operates on records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

export namespace InputLambdaProcessor {
  export const filterSensitiveLog = (obj: InputLambdaProcessor): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the
 *       Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in
 *       the stream.</p>
 */
export interface InputLambdaProcessorDescription {
  /**
   * <p>The ARN of the AWS Lambda function that is used to preprocess the records in the
   *       stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export namespace InputLambdaProcessorDescription {
  export const filterSensitiveLog = (obj: InputLambdaProcessorDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the
 *         <a>InputLambdaProcessor</a> that is used to preprocess the records in the
 *       stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new AWS Lambda function that is used to preprocess
   *       the records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace InputLambdaProcessorUpdate {
  export const filterSensitiveLog = (obj: InputLambdaProcessorUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the number of
 *       in-application streams to create for a given streaming source. </p>
 */
export interface InputParallelism {
  /**
   * <p>The number of in-application streams to create.</p>
   */
  Count?: number;
}

export namespace InputParallelism {
  export const filterSensitiveLog = (obj: InputParallelism): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the
 *       parallelism count.</p>
 */
export interface InputParallelismUpdate {
  /**
   * <p>The number of in-application streams to create for the specified streaming source.</p>
   */
  CountUpdate: number | undefined;
}

export namespace InputParallelismUpdate {
  export const filterSensitiveLog = (obj: InputParallelismUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is
 *       used to preprocess the records in the stream before being processed by your application code.
 *       Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  /**
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records
   *       in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

export namespace InputProcessingConfiguration {
  export const filterSensitiveLog = (obj: InputProcessingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration
 *       information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a>
   *          </p>
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}

export namespace InputProcessingConfigurationDescription {
  export const filterSensitiveLog = (obj: InputProcessingConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.</p>
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

export namespace InputProcessingConfigurationUpdate {
  export const filterSensitiveLog = (obj: InputProcessingConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input
 *       schema.</p>
 */
export interface InputSchemaUpdate {
  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *       of the streaming source element to the corresponding column in the in-application stream.</p>
   */
  RecordColumnUpdates?: RecordColumn[];

  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;

  /**
   * <p>Specifies the encoding of the records in the streaming source; for example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;
}

export namespace InputSchemaUpdate {
  export const filterSensitiveLog = (obj: InputSchemaUpdate): any => ({
    ...obj,
  });
}

export enum InputStartingPosition {
  LAST_STOPPED_POINT = "LAST_STOPPED_POINT",
  NOW = "NOW",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>Describes the point at which the application reads from
 *       the streaming source.</p>
 */
export interface InputStartingPositionConfiguration {
  /**
   * <p>The starting position on the stream.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Start reading just after the most recent record in the stream, and
   *           start at the request timestamp that the customer issued.</p>
   *
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the stream,
   *           which is the oldest record available in the stream. This option is not available
   *           for an Amazon Kinesis Data Firehose delivery stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAST_STOPPED_POINT</code> - Resume reading from where the application last stopped reading.</p>
   *             </li>
   *          </ul>
   */
  InputStartingPosition?: InputStartingPosition | string;
}

export namespace InputStartingPositionConfiguration {
  export const filterSensitiveLog = (obj: InputStartingPositionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes updates to a
 *       specific input configuration (identified by the <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  /**
   * <p>Describes the data format on the streaming source, and
   *       how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be
   *       updated, provides an updated stream ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * <p>The name prefix for in-application streams that Kinesis Data Analytics creates for the
   *       specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an
   *       updated stream Amazon Resource Name (ARN).</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data
   *       Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;

  /**
   * <p>The input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;
}

export namespace InputUpdate {
  export const filterSensitiveLog = (obj: InputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The user-provided application configuration is not valid.</p>
 */
export interface InvalidApplicationConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidApplicationConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidApplicationConfigurationException {
  export const filterSensitiveLog = (obj: InvalidApplicationConfigurationException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified input parameter value is not valid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>The request JSON is not valid for the operation.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping
 *       information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  /**
   * <p>The path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

export namespace JSONMappingParameters {
  export const filterSensitiveLog = (obj: JSONMappingParameters): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data
 *       Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon
 *       Resource Name (ARN).</p>
 */
export interface KinesisFirehoseInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisFirehoseInput {
  export const filterSensitiveLog = (obj: KinesisFirehoseInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source
 *       in the application input configuration. </p>
 */
export interface KinesisFirehoseInputDescription {
  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics assumes to access the stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisFirehoseInputDescription {
  export const filterSensitiveLog = (obj: KinesisFirehoseInputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when updating application
 *       input configuration, provides information about a Kinesis Data Firehose delivery stream as the
 *       streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input delivery stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisFirehoseInputUpdate {
  export const filterSensitiveLog = (obj: KinesisFirehoseInputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when configuring application
 *       output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the
 *       stream Amazon Resource Name (ARN) of the delivery stream. </p>
 */
export interface KinesisFirehoseOutput {
  /**
   * <p>The ARN of the destination delivery stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisFirehoseOutput {
  export const filterSensitiveLog = (obj: KinesisFirehoseOutput): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis
 *       Data Firehose delivery stream that is configured as its destination.</p>
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the
   *       stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export namespace KinesisFirehoseOutputDescription {
  export const filterSensitiveLog = (obj: KinesisFirehoseOutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when updating an output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis Data Firehose delivery stream that is configured as the destination.</p>
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream to write to. </p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisFirehoseOutputUpdate {
  export const filterSensitiveLog = (obj: KinesisFirehoseOutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p> Identifies an Amazon Kinesis data stream as the streaming source. You provide the
 *       stream's Amazon Resource Name (ARN).</p>
 */
export interface KinesisStreamsInput {
  /**
   * <p>The ARN of the input Kinesis data stream to read.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisStreamsInput {
  export const filterSensitiveLog = (obj: KinesisStreamsInput): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data
 *       stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface KinesisStreamsInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the
   *       stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export namespace KinesisStreamsInputDescription {
  export const filterSensitiveLog = (obj: KinesisStreamsInputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics
 *       application, provides information about an Amazon Kinesis stream as the streaming
 *       source.</p>
 */
export interface KinesisStreamsInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input Kinesis data stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisStreamsInputUpdate {
  export const filterSensitiveLog = (obj: KinesisStreamsInputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's output,
 *       identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource
 *       Name (ARN). </p>
 */
export interface KinesisStreamsOutput {
  /**
   * <p>The ARN of the destination Kinesis data stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisStreamsOutput {
  export const filterSensitiveLog = (obj: KinesisStreamsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis
 *       data stream that is configured as its destination. </p>
 */
export interface KinesisStreamsOutputDescription {
  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the
   *       stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisStreamsOutputDescription {
  export const filterSensitiveLog = (obj: KinesisStreamsOutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>When you update an SQL-based Amazon Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis data stream that is configured as the destination.</p>
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the
   *       output.</p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisStreamsOutputUpdate {
  export const filterSensitiveLog = (obj: KinesisStreamsOutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's output,
 *       identifies an AWS Lambda function as the destination. You provide the function Amazon Resource
 *       Name (ARN) of the Lambda function. </p>
 */
export interface LambdaOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

export namespace LambdaOutput {
  export const filterSensitiveLog = (obj: LambdaOutput): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS
 *       Lambda function that is configured as its destination. </p>
 */
export interface LambdaOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to write to the destination
   *       function.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export namespace LambdaOutputDescription {
  export const filterSensitiveLog = (obj: LambdaOutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>When you update an SQL-based Amazon Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about an AWS Lambda function that is configured as the destination.</p>
 */
export interface LambdaOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination AWS Lambda function.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace LambdaOutputUpdate {
  export const filterSensitiveLog = (obj: LambdaOutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The number of allowed resources has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface ListApplicationSnapshotsRequest {
  /**
   * <p>The maximum number of application snapshots to list.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more
   *       output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. </p>
   */
  NextToken?: string;

  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace ListApplicationSnapshotsRequest {
  export const filterSensitiveLog = (obj: ListApplicationSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface ListApplicationSnapshotsResponse {
  /**
   * <p>A collection of objects containing information about the application snapshots.</p>
   */
  SnapshotSummaries?: SnapshotDetails[];

  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationSnapshotsResponse {
  export const filterSensitiveLog = (obj: ListApplicationSnapshotsResponse): any => ({
    ...obj,
  });
}

export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of applications to list.</p>
   */
  Limit?: number;

  /**
   * <p>If a previous command returned a pagination token,
   *       pass it into this value to retrieve the next set of results.
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the AWS Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationsRequest {
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj,
  });
}

export interface ListApplicationsResponse {
  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       Pass this token into a subsequent command to retrieve the next set of items
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the AWS Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>ApplicationSummary</code> objects.</p>
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;
}

export namespace ListApplicationsResponse {
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the application for which to retrieve tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value tags assigned to the application.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum LogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN",
}

/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the
 *       time of creating or updating an application, provides additional mapping information specific
 *       to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the
 *       streaming source.</p>
 */
export interface MappingParameters {
  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *       (for example, CSV).</p>
   */
  CSVMappingParameters?: CSVMappingParameters;

  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: JSONMappingParameters;
}

export namespace MappingParameters {
  export const filterSensitiveLog = (obj: MappingParameters): any => ({
    ...obj,
  });
}

export enum MetricsLevel {
  APPLICATION = "APPLICATION",
  OPERATOR = "OPERATOR",
  PARALLELISM = "PARALLELISM",
  TASK = "TASK",
}

/**
 * <p>Describes configuration parameters for Amazon CloudWatch logging for a Java-based
 *       Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface MonitoringConfiguration {
  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: MetricsLevel | string;

  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.
   *     You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationType: ConfigurationType | string | undefined;
}

export namespace MonitoringConfiguration {
  export const filterSensitiveLog = (obj: MonitoringConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes configuration parameters for CloudWatch logging for a Java-based
 *       Kinesis Data Analytics application.</p>
 */
export interface MonitoringConfigurationDescription {
  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;

  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: MetricsLevel | string;
}

export namespace MonitoringConfigurationDescription {
  export const filterSensitiveLog = (obj: MonitoringConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application.</p>
 */
export interface MonitoringConfigurationUpdate {
  /**
   * <p>Describes updates to the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevelUpdate?: MetricsLevel | string;

  /**
   * <p>Describes updates to the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevelUpdate?: LogLevel | string;

  /**
   * <p>Describes updates to whether to use the default CloudWatch logging configuration for
   *       an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;
}

export namespace MonitoringConfigurationUpdate {
  export const filterSensitiveLog = (obj: MonitoringConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration,
 *       in which you identify an in-application stream and a destination where you want the
 *       in-application stream data to be written. The destination can be a Kinesis data stream or a
 *       Kinesis Data Firehose delivery stream. </p>
 *
 *          <p></p>
 */
export interface Output {
  /**
   * <p>Identifies an Amazon Kinesis Data Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * <p>Identifies an Amazon Kinesis data stream
   *       as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchema: DestinationSchema | undefined;

  /**
   * <p>The name of the in-application stream.</p>
   */
  Name: string | undefined;
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the application
 *       output configuration, which includes the in-application stream name and the destination where
 *       the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data
 *       Firehose delivery stream. </p>
 */
export interface OutputDescription {
  /**
   * <p>Describes the Kinesis data stream that is configured as the destination where output is
   *       written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination
   *       where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * <p>The data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;

  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * <p>The name of the in-application stream that is configured as output.</p>
   */
  Name?: string;

  /**
   * <p>Describes the Lambda function that is configured as the destination where output is
   *       written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;
}

export namespace OutputDescription {
  export const filterSensitiveLog = (obj: OutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p> For an SQL-based Amazon Kinesis Data Analytics application, describes updates to the
 *       output configuration identified by the <code>OutputId</code>. </p>
 */
export interface OutputUpdate {
  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string | undefined;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * <p>Describes a Kinesis data stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchemaUpdate?: DestinationSchema;

  /**
   * <p>Describes a Kinesis Data Firehose delivery stream as the destination for the
   *       output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * <p>If you want to specify a different in-application stream
   *       for this output configuration, use this field to
   *       specify the new in-application stream name.</p>
   */
  NameUpdate?: string;
}

export namespace OutputUpdate {
  export const filterSensitiveLog = (obj: OutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes parameters for how a Java-based Amazon Kinesis Data Analytics
 *       application executes multiple tasks simultaneously. For more information about parallelism,
 *       see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink
 *         Documentation</a>.</p>
 */
export interface ParallelismConfiguration {
  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;

  /**
   * <p>Describes the number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform per Kinesis Processing Unit (KPU) used by the application. For more
   *       information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Kinesis Data Analytics Pricing</a>.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data
   *       Analytics service. You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform. If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics increases the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase the <code>CurrentParallelism</code> value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;
}

export namespace ParallelismConfiguration {
  export const filterSensitiveLog = (obj: ParallelismConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes parameters for how a Java-based Kinesis Data Analytics application
 *       executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. </p>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform. If <code>AutoScalingEnabled</code> is set to True, then Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;

  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;

  /**
   * <p>Describes the current number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform. If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics can increase this value in response to application
   *     load. The service can increase this value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce
   *     the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  CurrentParallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPU?: number;
}

export namespace ParallelismConfigurationDescription {
  export const filterSensitiveLog = (obj: ParallelismConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to parameters for how a Java-based Kinesis Data Analytics
 *       application executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationUpdate {
  /**
   * <p>Describes updates to whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to the initial number of parallel tasks an application can perform. If <code>AutoScalingEnabled</code> is set to True, then Kinesis
   *       Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will
   *     reduce <code>CurrentParallelism</code> down to the <code>Parallelism</code> setting.</p>
   */
  ParallelismUpdate?: number;

  /**
   * <p>Describes updates to whether the application uses the default parallelism for the Kinesis Data Analytics service, or if a custom parallelism is used.
   *     You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPUUpdate?: number;
}

export namespace ParallelismConfigurationUpdate {
  export const filterSensitiveLog = (obj: ParallelismConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Property key-value pairs passed into a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface PropertyGroup {
  /**
   * <p>Describes the key of an application execution property key-value pair.</p>
   */
  PropertyGroupId: string | undefined;

  /**
   * <p>Describes the value of an application execution property key-value pair.</p>
   */
  PropertyMap: { [key: string]: string } | undefined;
}

export namespace PropertyGroup {
  export const filterSensitiveLog = (obj: PropertyGroup): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the mapping of each
 *       data element in the streaming source to the corresponding column in the in-application
 *       stream.</p>
 *          <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  /**
   * <p>The name of the column that is created in the in-application input stream or reference
   *       table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;

  /**
   * <p>A reference to the data element in the streaming input or the reference data
   *       source.</p>
   */
  Mapping?: string;
}

export namespace RecordColumn {
  export const filterSensitiveLog = (obj: RecordColumn): any => ({
    ...obj,
  });
}

/**
 * <p> For an SQL-based Amazon Kinesis Data Analytics application, describes the record format
 *       and relevant mapping information that should be applied to schematize the records on the
 *       stream. </p>
 */
export interface RecordFormat {
  /**
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;

  /**
   * <p>When you configure application input at the time of creating or updating an application,
   *       provides additional mapping information specific to the record format (such as JSON, CSV, or
   *       record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;
}

export namespace RecordFormat {
  export const filterSensitiveLog = (obj: RecordFormat): any => ({
    ...obj,
  });
}

export enum RecordFormatType {
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data
 *       source by providing the source information (Amazon S3 bucket name and object key name), the
 *       resulting in-application table name that is created, and the necessary schema to map the data
 *       elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  /**
   * <p>The name of the in-application table to create.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: SourceSchema | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data.
   *
   *       A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;
}

export namespace ReferenceDataSource {
  export const filterSensitiveLog = (obj: ReferenceDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data
 *       source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  /**
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: SourceSchema;

  /**
   * <p>The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns
   *       when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string | undefined;
}

export namespace ReferenceDataSourceDescription {
  export const filterSensitiveLog = (obj: ReferenceDataSourceDescription): any => ({
    ...obj,
  });
}

/**
 * <p>When you update a reference data source configuration for a
 *       SQL-based Amazon Kinesis Data Analytics application, this object provides all the updated values
 *       (such as the source bucket name and object key name), the in-application table name that is created,
 *       and updated mapping information that maps the data in the Amazon S3 object to the in-application
 *       reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;

  /**
   * <p>The ID of the reference data source that is being updated. You can use the <a>DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * <p>The in-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;
}

export namespace ReferenceDataSourceUpdate {
  export const filterSensitiveLog = (obj: ReferenceDataSourceUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The application is not available for this operation.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>Specified application can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Discovery failed to get a record from the streaming source because of the Amazon Kinesis
 *       Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
 */
export interface ResourceProvisionedThroughputExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceProvisionedThroughputExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceProvisionedThroughputExceededException {
  export const filterSensitiveLog = (obj: ResourceProvisionedThroughputExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the starting parameters for an Amazon Kinesis Data Analytics application.</p>
 */
export interface RunConfiguration {
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  /**
   * <p>Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics
   *       application.</p>
   */
  SqlRunConfigurations?: SqlRunConfiguration[];
}

export namespace RunConfiguration {
  export const filterSensitiveLog = (obj: RunConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the starting properties for a Kinesis Data Analytics application.</p>
 */
export interface RunConfigurationDescription {
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;
}

export namespace RunConfigurationDescription {
  export const filterSensitiveLog = (obj: RunConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the updates to the starting parameters for a Kinesis Data Analytics
 *       application.</p>
 */
export interface RunConfigurationUpdate {
  /**
   * <p>Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

export namespace RunConfigurationUpdate {
  export const filterSensitiveLog = (obj: RunConfigurationUpdate): any => ({
    ...obj,
  });
}

export enum RuntimeEnvironment {
  FLINK_1_6 = "FLINK-1_6",
  FLINK_1_8 = "FLINK-1_8",
  SQL_1_0 = "SQL-1_0",
}

/**
 * <p>Describes the location of a Java-based Amazon Kinesis Data Analytics
 *       application's code stored in an S3 bucket.</p>
 */
export interface S3ApplicationCodeLocationDescription {
  /**
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;

  /**
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string | undefined;
}

export namespace S3ApplicationCodeLocationDescription {
  export const filterSensitiveLog = (obj: S3ApplicationCodeLocationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an
 *       Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name
 *       of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  /**
   * <p>The ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string | undefined;
}

export namespace S3Configuration {
  export const filterSensitiveLog = (obj: S3Configuration): any => ({
    ...obj,
  });
}

/**
 * <p>For a Java-based Amazon Kinesis Data Analytics application, provides a
 *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
 *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
 *       S3 object that contains the data. </p>
 */
export interface S3ContentLocation {
  /**
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;

  /**
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string | undefined;
}

export namespace S3ContentLocation {
  export const filterSensitiveLog = (obj: S3ContentLocation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an update for the Amazon S3 code content location for a Java-based
 *       Amazon Kinesis Data Analytics application.</p>
 */
export interface S3ContentLocationUpdate {
  /**
   * <p>The new file key for the object containing the application code.</p>
   */
  FileKeyUpdate?: string;

  /**
   * <p>The new version of the object containing the application code.</p>
   */
  ObjectVersionUpdate?: string;

  /**
   * <p>The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARNUpdate?: string;
}

export namespace S3ContentLocationUpdate {
  export const filterSensitiveLog = (obj: S3ContentLocationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3
 *       bucket and object that contains the reference data.</p>
 *
 *          <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
 */
export interface S3ReferenceDataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN?: string;

  /**
   * <p>The object key name containing the reference data.</p>
   */
  FileKey?: string;
}

export namespace S3ReferenceDataSource {
  export const filterSensitiveLog = (obj: S3ReferenceDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and
 *       object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to read the Amazon S3
   *       object on your behalf to populate the in-application reference table. </p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  ReferenceRoleARN?: string;
}

export namespace S3ReferenceDataSourceDescription {
  export const filterSensitiveLog = (obj: S3ReferenceDataSourceDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket
 *       name and object key name for an in-application reference table. </p>
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * <p>The object key name.</p>
   */
  FileKeyUpdate?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;
}

export namespace S3ReferenceDataSourceUpdate {
  export const filterSensitiveLog = (obj: S3ReferenceDataSourceUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The service cannot complete the request.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides details about a snapshot of application state.</p>
 */
export interface SnapshotDetails {
  /**
   * <p>The timestamp of the application snapshot.</p>
   */
  SnapshotCreationTimestamp?: Date;

  /**
   * <p>The status of the application snapshot.</p>
   */
  SnapshotStatus: SnapshotStatus | string | undefined;

  /**
   * <p>The identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;

  /**
   * <p>The current application version ID when the snapshot was created.</p>
   */
  ApplicationVersionId: number | undefined;
}

export namespace SnapshotDetails {
  export const filterSensitiveLog = (obj: SnapshotDetails): any => ({
    ...obj,
  });
}

export enum SnapshotStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  READY = "READY",
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the
 *       data in the streaming source, and how each data element maps to corresponding columns created
 *       in the in-application stream. </p>
 */
export interface SourceSchema {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormat: RecordFormat | undefined;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncoding?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. </p>
   */
  RecordColumns: RecordColumn[] | undefined;
}

export namespace SourceSchema {
  export const filterSensitiveLog = (obj: SourceSchema): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data
 *       Analytics application.</p>
 */
export interface SqlApplicationConfiguration {
  /**
   * <p>The array of <a>Input</a> objects describing the input streams used by the
   *       application.</p>
   */
  Inputs?: Input[];

  /**
   * <p>The array of <a>Output</a> objects describing the destination streams used by
   *       the application.</p>
   */
  Outputs?: Output[];

  /**
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data
   *       sources used by the application.</p>
   */
  ReferenceDataSources?: ReferenceDataSource[];
}

export namespace SqlApplicationConfiguration {
  export const filterSensitiveLog = (obj: SqlApplicationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data
 *       Analytics application.</p>
 */
export interface SqlApplicationConfigurationDescription {
  /**
   * <p>The array of <a>OutputDescription</a> objects describing the destination
   *       streams used by the application.</p>
   */
  OutputDescriptions?: OutputDescription[];

  /**
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

  /**
   * <p>The array of <a>InputDescription</a> objects describing the input streams used
   *       by the application.</p>
   */
  InputDescriptions?: InputDescription[];
}

export namespace SqlApplicationConfigurationDescription {
  export const filterSensitiveLog = (obj: SqlApplicationConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to the input streams, destination streams, and reference data sources
 *       for an SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfigurationUpdate {
  /**
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used
   *       by the application.</p>
   */
  InputUpdates?: InputUpdate[];

  /**
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams
   *       used by the application.</p>
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}

export namespace SqlApplicationConfigurationUpdate {
  export const filterSensitiveLog = (obj: SqlApplicationConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics
 *       application.</p>
 */
export interface SqlRunConfiguration {
  /**
   * <p>The point at which you want the application to start processing records from the streaming
   *       source. </p>
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;

  /**
   * <p>The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. </p>
   */
  InputId: string | undefined;
}

export namespace SqlRunConfiguration {
  export const filterSensitiveLog = (obj: SqlRunConfiguration): any => ({
    ...obj,
  });
}

export interface StartApplicationRequest {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Identifies the run configuration (start parameters) of a Kinesis Data Analytics application.</p>
   */
  RunConfiguration: RunConfiguration | undefined;
}

export namespace StartApplicationRequest {
  export const filterSensitiveLog = (obj: StartApplicationRequest): any => ({
    ...obj,
  });
}

export interface StartApplicationResponse {}

export namespace StartApplicationResponse {
  export const filterSensitiveLog = (obj: StartApplicationResponse): any => ({
    ...obj,
  });
}

export interface StopApplicationRequest {
  /**
   * <p>The name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;
}

export namespace StopApplicationRequest {
  export const filterSensitiveLog = (obj: StopApplicationRequest): any => ({
    ...obj,
  });
}

export interface StopApplicationResponse {}

export namespace StopApplicationResponse {
  export const filterSensitiveLog = (obj: StopApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
 */
export interface Tag {
  /**
   * <p>The value of the key-value tag. The value is optional.</p>
   */
  Value?: string;

  /**
   * <p>The key of the key-value tag.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The key-value tags to assign to the application.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The ARN of the application to assign the tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

/**
 * <p>The data format is not valid. Amazon Kinesis Data Analytics cannot detect the schema for
 *       the given streaming source.</p>
 */
export interface UnableToDetectSchemaException extends __SmithyException, $MetadataBearer {
  name: "UnableToDetectSchemaException";
  $fault: "client";
  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];

  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter. </p>
   */
  ProcessedInputRecords?: string[];

  Message?: string;
}

export namespace UnableToDetectSchemaException {
  export const filterSensitiveLog = (obj: UnableToDetectSchemaException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the Kinesis Analytics application from which to remove the tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of keys of tags to remove from the specified application.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateApplicationRequest {
  /**
   * <p>Describes application Amazon CloudWatch logging option updates. You can only update
   *       existing CloudWatch logging options with this action. To add a new CloudWatch logging option,
   *       use <a>AddApplicationCloudWatchLoggingOption</a>.</p>
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  /**
   * <p>The current application version ID. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>Describes updates to the application's starting parameters.</p>
   */
  RunConfigurationUpdate?: RunConfigurationUpdate;

  /**
   * <p>The name of the application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes application configuration updates.</p>
   */
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the service execution role.</p>
   */
  ServiceExecutionRoleUpdate?: string;
}

export namespace UpdateApplicationRequest {
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj,
  });
}

export interface UpdateApplicationResponse {
  /**
   * <p>Describes application updates.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace UpdateApplicationResponse {
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfiguration {
  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace VpcConfiguration {
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfigurationDescription {
  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ID of the associated VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace VpcConfigurationDescription {
  export const filterSensitiveLog = (obj: VpcConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to the VPC configuration used by the application.</p>
 */
export interface VpcConfigurationUpdate {
  /**
   * <p>Describes an update to the ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs
   *         used by the VPC configuration.</p>
   */
  SubnetIdUpdates?: string[];

  /**
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIdUpdates?: string[];
}

export namespace VpcConfigurationUpdate {
  export const filterSensitiveLog = (obj: VpcConfigurationUpdate): any => ({
    ...obj,
  });
}
